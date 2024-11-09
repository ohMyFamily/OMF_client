import classNames from "classnames"
import $ from './Input.module.scss';
import Input from "."
import { Body2 } from "../Typography"

interface InputFieldProps {
    label?: string;
    }

function Inputfield({label}: InputFieldProps) {
    return (
        <div className={classNames($.fieldWrapper)}>
            <div>
            {label && <Body2>{label}</Body2>}
            <Input/>
            </div>
        </div>
    )
}

export default Inputfield