import { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';
import $ from './radio.module.scss';
import Button1 from '../Typography/Button1';

interface RadioProps {
    options: string[];
    isSelectedIndex: number;
    setIsSelectedIndex: Dispatch<SetStateAction<number>>;
}

function Radio({ options, isSelectedIndex, setIsSelectedIndex }: RadioProps) {
    return (
        <div className={$.layout}>
        {options.map((item, index) => {
            return (
            <div
                className={classNames($.radioContainer, {
                [$.selectedState]: isSelectedIndex === index,
                })}
                onClick={() => setIsSelectedIndex(index)}
            >
                <Button1>{item} </Button1>
            </div>
            );
        })}
        </div>
    );
}

export default Radio;

