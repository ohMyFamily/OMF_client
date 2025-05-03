import { useGetUserInfo } from '@/apis/queries/user';
import SplashLayout from '@/container/splash';
import { Storage } from '@/storage';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Splash() {
  const { data } = useGetUserInfo();
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const encryptedPath = query.get('encrypted');
    
    if (encryptedPath) {
      navigate(`/encrypted?encrypted=${encodeURIComponent(encryptedPath)}`);
    }
  }, [navigate, location.search]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (data) {
        Storage.setItem('userId', data.memberId);
        Storage.setItem('nickname', data.nickname);
      }
      const accessToken = Storage.getItem('accessToken');
      if (accessToken) {
        navigate('/main');
      } else {
        navigate('/login');
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return <SplashLayout />;
}
