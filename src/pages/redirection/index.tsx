import { useEffect } from 'react';
import { useKakaoLoginQuery } from '@/apis/queries/user';


export default function Redirection() {
    const code = new URL(window.location.href).searchParams.get('code');
    const { mutate } = useKakaoLoginQuery();

    useEffect(() => {
        if (code) {
            mutate(code);
        }
    }, [code, mutate]);

    return <div>로그인 처리중</div>;
}
