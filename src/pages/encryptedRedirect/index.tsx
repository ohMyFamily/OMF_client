import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import Spinner from '@/components/common/Spinner';

const VITE_SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

const EncryptedRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const encryptedPath = query.get('encrypted');
    
    if (encryptedPath) {
      try {
        const decodedPath = decodeURIComponent(encryptedPath);
        // 복호화
        const bytes = CryptoJS.AES.decrypt(decodedPath, VITE_SECRET_KEY);
        const decryptedPath = bytes.toString(CryptoJS.enc.Utf8);
        
        if (decryptedPath) {
          navigate(decryptedPath, { replace: true });
        } else {
          navigate('/', { replace: true });
        }
      } catch (error) {
        console.error('경로 복호화 실패:', error);
        navigate('/', { replace: true });
      }
    } else {
      navigate('/', { replace: true });
    }
  }, [navigate, location.search]);
  
  return <Spinner />;
};

export default EncryptedRedirect;