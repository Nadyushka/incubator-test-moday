import React from 'react';
import s from "./display.module.css"


type displayPropsType = {
    value:number
}

const Display:React.FC<displayPropsType> = (props) => {

    const {value} = props

    return (
        <div className={s.display}>
            {value}
        </div>
    );
};

export default Display;