import classNames from "classnames";
import { ChangeEvent, useEffect, useState } from "react"
import $ from './Input.module.scss'
import X from '@/assets/svg/X.svg';


export default function Input(){
    const [text, setText] = useState<string>('');
    const [isTyping, setIsTyping] = useState<boolean>(false);

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => { 
        setText(e.target.value);
    }

    const handleClear = () => {
        setText('');
    }

    useEffect(() => {
        if (text=='') {
            setIsTyping(false); 
        } 
        else { setIsTyping(true); }
    }, [text]) 

    return(
        <div className={classNames($.inputWrapper)}>
            <input value={text} className={classNames($.input)} onChange={onChangeText} />
            {isTyping  && <img src={X} className={classNames($.inputClose)} onClick={handleClear}/>}
        </div>
    )
}