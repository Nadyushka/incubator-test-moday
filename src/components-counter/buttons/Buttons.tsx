import React from 'react';
import {button} from "../CounterMain";
import s from "../button/button.module.css";

type ButtonsPropsType = {
    allButtonsInfo: button[]
    increaseValue: () => void
    resetValue: () => void
    updateButtonDefault?: () => void
}

const Buttons: React.FC<ButtonsPropsType> = (props) => {

    const {allButtonsInfo, increaseValue, resetValue, updateButtonDefault} = props

    const addFunction = (buttonType: string) => buttonType === 'ADD' ? increaseValue : resetValue


    const buttonOnPage = allButtonsInfo.map(item =>

        <div key={item.id}
             onClick={addFunction(item.buttonType)}
             className={`${s.button} ${item.default === true && s.buttonDefaultValue}`}>
            {item.buttonType}
        </div>
    )

    return (
        <div>
            {buttonOnPage}
        </div>
    );
};

export default Buttons;