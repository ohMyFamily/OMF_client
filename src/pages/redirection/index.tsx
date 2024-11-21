import { useEffect } from 'react';
import { useKakaoLoginQuery } from '@/apis/queries/user';
import { useSearchParams } from 'react-router-dom';
import Spinner from '@/components/common/Spinner';
import classNames from 'classnames';
import $ from './redirection.module.scss'


export default function Redirection() {
    const [searchParams] = useSearchParams();
    let code = searchParams.get('code');
    const { mutate } = useKakaoLoginQuery();

    useEffect(() => {
        if (!code) return;
        mutate(code);
        return () => {
            code = '';
        };
    }, [code]);

    return <div className={classNames($.Wrapper)}><Spinner/></div>;
}
