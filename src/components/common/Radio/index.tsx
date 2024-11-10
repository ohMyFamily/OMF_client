import { useState } from 'react';
import classNames from 'classnames';
import $ from './radio.module.scss';
import Button1 from '../Typography/Button1';

interface RadioProps {
    options: string[];
}

function Radio({ options }: RadioProps) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div 
        className={classNames($.radioContainer, {
            [$.selectedState]: isSelected
        })}
        onClick={() => setIsSelected(!isSelected)}
        >
            <div className={classNames($.options)}>
                <Button1>{options} 오늘</Button1>
            </div>
        </div>
    );
}

export default Radio;