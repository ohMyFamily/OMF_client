import { useGetUserInfo } from '@/apis/queries/user';
import SplashLayout from '@/container/splash';
import { Storage } from '@/storage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const { data } = useGetUserInfo();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (data) {
        Storage.setItem('userId', data.memberId);
        Storage.setItem('nickname', data.nickname);
        // navigate('/');
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [data]);

  return <SplashLayout />;
}
