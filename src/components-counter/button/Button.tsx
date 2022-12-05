import React, {useState} from 'react';
import s from './button.module.css'


type ButtonPropsType = {
    callback?: () => void
    children?: string
    buttonTypeDefault:boolean
}

const Button: React.FC<ButtonPropsType> = (props) => {

    const {callback, children,buttonTypeDefault} = props
    const [defaultValue, setDefaultValue] = useState<any>(false)
    const fullClassName = `${s.button} ${buttonTypeDefault === true && s.buttonDefaultValue}`

    return (
        <div className={fullClassName} onClick={callback}>
            {children}
        </div>
    );
};

export default Button;