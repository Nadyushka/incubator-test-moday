import React, {DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import s from './button.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type ButtonPropsType = DefaultInputPropsType & {
    changeValue: () => void
    disable: boolean
}

const Button = (props: ButtonPropsType) => {

    const [disable, setDisable] = useState<boolean>(false)

    const finalClassName = `${s.button} ${props.disable === true && s.buttonDisabled}`

    return (
        <div className={finalClassName} onClick={props.changeValue}>
            {props.children}
        </div>
    );
};

export default Button;