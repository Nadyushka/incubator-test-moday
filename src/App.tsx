import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainWindow from "./components-1/MainWindow";
import CounterMain from "./components-counter/CounterMain";

function App() {
    return (<>
            <MainWindow/>
            <CounterMain/>
        </>
    )
        ;
}

export default App;
