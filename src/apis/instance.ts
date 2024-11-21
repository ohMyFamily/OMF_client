import axios, { AxiosError, AxiosResponse } from 'axios';
import { Storage } from '@/storage';

const baseURL = import.meta.env.VITE_APP_API;

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
        const accessToken = Storage.getItem('accessToken');
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
    const refreshToken = Storage.getItem('refreshToken');
    const response = await axios.post(`${baseURL}/auth/refresh`, {
        refreshToken,
    });
    return response.data;
};

// 로그아웃 처리
export const handleLogout = () => {
    Storage.clearItems();
    window.location.href = '/login'; // 로그인 페이지로 이동
};

// 액세스 토큰, 리프레시 토큰을 설정하거나 제거하는 함수
export const setAuthToken = (accessToken: string | null, refreshToken?: string | null) => {
    if (accessToken) {
        Storage.setItem('accessToken', accessToken);
        instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        
        if (refreshToken) {
            Storage.setItem('refreshToken', refreshToken);
        }
    } else {
        Storage.removeItem('accessToken');
        Storage.removeItem('refreshToken');
        delete instance.defaults.headers.common.Authorization;
    }
};