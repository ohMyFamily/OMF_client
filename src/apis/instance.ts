import axios, { AxiosError, AxiosResponse } from 'axios';
import { LocalStorage } from '@/localstorage';

const baseURL = process.env.OMF_APP_API;

export const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
    async (config) => {
        const accessToken = LocalStorage.getItem('accessToken');
        if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error.response?.data || 'Request failed');
    }
);

// 응답 인터셉터 설정
instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const newToken = await refreshToken();
            setAuthToken(newToken.accesstoken);
            return instance(originalRequest);
        } catch (err) {
            handleLogout();
        }
    }
    return Promise.reject(error);
    }
);

// 리프레시 토큰 로직
const refreshToken = async () => {
    const refreshToken = LocalStorage.getItem('refreshToken');
    const response = await axios.post(`${baseURL}/auth/refresh`, {
        refreshToken,
    });
    return response.data;
};

// 로그아웃 처리
const handleLogout = () => {
    LocalStorage.removeItem('accesstoken');
    LocalStorage.removeItem('refreshToken');
    LocalStorage.removeItem('ID'); // 임시, 아이디 제거
    window.location.href = '/login'; // 로그인 페이지로 이동
};

/**
 * 액세스 토큰을 설정하거나 제거하는 함수
 * @param accessToken - 설정할 액세스 토큰 (null일 경우 토큰 제거)
 */
export const setAuthToken = (accessToken: string | null) => {
    if (accessToken) {
        LocalStorage.setItem('accessToken', accessToken);
        instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        LocalStorage.removeItem('accessToken');
        delete instance.defaults.headers.common.Authorization;
    }
};

// 앱 시작 시 저장된 토큰이 있다면 자동 로그인
export const initializeAuth = () => {
    const accessToken = LocalStorage.getItem('accessToken');
    if (accessToken) {
        setAuthToken(accessToken as string);
    }
};