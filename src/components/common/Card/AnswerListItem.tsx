import { useState } from 'react';
import classNames from 'classnames';
import $ from './answerlistitem.module.scss';
import Body2 from '../Typography/Body2';

interface AnswerListItemProps {
    nickname: string;
    score: number;
    src: string;
}

function AnswerListItem({ nickname, score, src }: AnswerListItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (!isOpen) {
        setIsOpen(true);
        }
    };

    return (
        <div 
        className={classNames($.answerContainer, {
            [$.openState]: isOpen
        })}
        onClick={handleClick}
        >
        <img src={src} alt={`${nickname}의 프로필`} />
        <div className={classNames($.description)}>
            {isOpen ? (
            <>
                <span>{score}점!</span>
                <div className={classNames($.message)}>
                <Body2>{nickname}님이 채점한 답안지</Body2>
                </div>
            </>
            ) : (
            <>
                <span>{nickname}님이</span>
                <div className={classNames($.message)}>
                <Body2>채점한 답안지가 도착했어요!</Body2>
                </div>
            </>
            )}
        </div>
        </div>
    );
}

export default AnswerListItem;