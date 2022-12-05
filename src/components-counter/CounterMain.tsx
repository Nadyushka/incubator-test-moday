import React, {useState} from 'react';
import Display from "./display/Display";
import Button from "./button/Button";
import Buttons from "./buttons/Buttons";


export type button = {
    id: number
    buttonType: 'ADD' | 'RESET'
    default: boolean
}

const CounterMain = () => {

    const minValue: number = 5
    const maxValue: number = 10
    const [value, setValue] = useState<number>(minValue)
    const [buttonTypeDefaultAdd, setButtonsTypeDefaultAdd] = useState<boolean>(false)
    const [buttonTypeDefaultReset, setButtonsTypeDefaultReset] = useState<boolean>(true)

    const increaseValue = () => {
        setButtonsTypeDefaultReset(false)
        value < maxValue && setValue(value + 1)
        value === maxValue && setButtonsTypeDefaultAdd(true)
    }
    const resetValue = () => {
        setValue(minValue)
        setButtonsTypeDefaultReset(true)
        setButtonsTypeDefaultAdd(false)
    }





    const minValue1: number = 10
    const maxValue1: number = 20
    const [value1, setValue1] = useState<number>(minValue1)


    const [buttonsOnPage, setButtonsOnPage] = useState<Array<button>>([
            {id: 1, buttonType: 'ADD', default: false},
            {id: 2, buttonType: 'RESET', default: true}
        ]
    )
    const updateButtonDefault = (buttonType: 'ADD' | 'RESET' , defaultValue: boolean) => {
        const updatedButtons = buttonsOnPage.map(item => item.buttonType === buttonType ? {...item, default: defaultValue} : item)
        setButtonsOnPage([...updatedButtons])
    }

    const increaseValue1 = () => {
        updateButtonDefault('RESET', false)
        value1 === maxValue1 - 1 && updateButtonDefault('ADD', true)
        value1 < maxValue1 && setValue1(value1 + 1);

    }
    const resetValue1 = () => {
        setButtonsOnPage([{id: 1, buttonType: 'ADD', default: false},
            {id: 2, buttonType: 'RESET', default: true}])
        setValue1(minValue1)
    }


    return (
        <div>
            <Display value={value}/>
            <Button callback={increaseValue} buttonTypeDefault={buttonTypeDefaultAdd}> Add </Button>
            <Button callback={resetValue} buttonTypeDefault={buttonTypeDefaultReset}> Reset </Button>
            <br/>
            <br/>
            <br/>
            <Display value={value1}/>
            <Buttons allButtonsInfo={buttonsOnPage} increaseValue={increaseValue1} resetValue={resetValue1}/>
        </div>
    );
};

export default CounterMain;