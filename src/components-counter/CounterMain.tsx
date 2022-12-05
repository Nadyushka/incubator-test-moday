import React, {useState} from 'react';
import Display from "./display/Display";
import Button from "./button/Button";

type defaultButtonType = {
    'add': boolean
    'reset': boolean
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

    return (
        <div>
            <Display value={value}/>
            <Button callback={increaseValue} buttonTypeDefault = {buttonTypeDefaultAdd}> Add </Button>
            <Button callback={resetValue} buttonTypeDefault = {buttonTypeDefaultReset}> Reset </Button>
        </div>
    );
};

export default CounterMain;