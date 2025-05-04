import { useGetUserInfo } from '@/apis/queries/user';
import SplashLayout from '@/container/splash';
import { Storage } from '@/storage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const { data, refetch } = useGetUserInfo();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      refetch();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (data) {
      Storage.setItem('userId', data.memberId);
      Storage.setItem('nickname', data.nickname);
      navigate('/main');
    }
  }, [data]);

  return <SplashLayout />;
}
