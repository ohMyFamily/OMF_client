import classNames from "classnames"
import $ from './Input.module.scss';
import Input from "."
import { Body1 } from "../Typography"

interface InputFieldProps {
    label: string;
    }

function Inputfield({label}: InputFieldProps) {
    return (
        <div className={classNames($.fieldWrapper)}>
            <div>
                <Body1>{label}</Body1>
                <Input/>
            </div>
        </div>
    )
}

export default Inputfield