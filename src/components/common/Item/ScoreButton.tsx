import { useState } from 'react';
import classNames from 'classnames';
import $ from './scorebutton.module.scss';
import Button1 from '../Typography/Button1';
import XCircle from '@/assets/svg/XCircle.svg?react';
import CheckCircle from '@/assets/svg/CheckCircle.svg?react';

interface ScoreButtonProps {
    items: ('correct' | 'incorrect')[];
}


const ScoreButton = ({ items }: ScoreButtonProps) => {
    // 초기값: 아무것도 선택하지 않은 상태 -1
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);

    const handleClick = (index: number) => {
        if (selectedIndex === -1 || selectedIndex !== index) {
            setSelectedIndex(index);
            console.log('선택 항목:', index);
        }
    };
    return (
        <div className={classNames($.scoreButtonContainer)}>
            {items.map((type, index) => (
                <div 
                    key={index} 
                    className={classNames($.scoreButtonItem, $[`scoreButtonItem${type}`], {
                        [$[`scoreButtonItemClicked`]]: selectedIndex === index
                    })}
                    onClick={() => handleClick(index)}
                >
                    {type === 'correct' ? (
                        <CheckCircle 
                            className={classNames($.icon, {
                                [$.iconCorrectClicked]: selectedIndex === index,
                            })}
                        />

                    ) : (
                        <XCircle 
                            className={classNames($.icon, {
                                [$.iconIncorrectClicked]: selectedIndex === index,
                            })}
                        />
                    )}
                    <div className={classNames($.textWrapper, {
                        [$.textClicked]: selectedIndex === index
                    })}>
                        <Button1>
                            {type === 'correct' ? '정답이에요!' : '틀렸어요.'}
                        </Button1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScoreButton;