import { useEffect } from 'react';
import { useKakaoLoginQuery } from '@/apis/queries/user';
import { useSearchParams } from 'react-router-dom';


export default function Redirection() {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const { mutate } = useKakaoLoginQuery();

    useEffect(() => {
        if (code) {
            mutate(code);
        }
    }, [code, mutate]);

    return <div>로그인 처리중</div>;
}
