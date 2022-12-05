import React from 'react';
import s from "./display.module.css"

type PropsType ={
    value: number
}

const Display = (props:PropsType) => {

    const finalClassName =`${s.displayStyle} ${props.value === 5 && s.displayStyleMaxValue}`

    return (
        <div className={finalClassName}>
            <div>{props.value}</div>
        </div>
    );
};

export default Display;