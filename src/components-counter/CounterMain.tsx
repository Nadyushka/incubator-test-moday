import React, {useState} from 'react';
import Display from "./display/Display";
import Button from "./button/Button";

const CounterMain = () => {

    const [value, setValue] = useState<number>(0)

    return (
        <div>
            <Display value={value}/>
            <Button/>
            <Button/>
        </div>
    );
};

export default CounterMain;