import React, {useEffect, useState} from 'react';
import Display from "./display/Display";
import Button from "./button/Button";
import s from './mainWindow.module.css'


const MainWindow = () => {

    const [value, setValue] = useState<number>(0);
    const [disableAdd, setDisableAdd] = useState<boolean>(false)
    const [disableReset, setDisableReset] = useState<boolean>(true)

    const increaseValue = () => {
        if (value < 4) {
            setValue(value + 1)
            setDisableAdd(false)
            setDisableReset(false)
        } else if (value === 4) {
            setValue(value + 1)
            setDisableAdd(true)
        }
    }
    const resetValue = () => {
        setValue(0)
        setDisableReset(true)
        setDisableAdd(false)
    }

    return (
        <div className={s.mainWindow}>
            <Display value={value}/>
            <div className={s.buttonContainer}>
                <Button disable={disableAdd} changeValue={increaseValue}> Increment </Button>
                <Button disable={disableReset} changeValue={resetValue}> Reset </Button>
            </div>
        </div>
    );
};

export default MainWindow;