import React, { Component } from 'react';
import pinterest from './img/logo.png'
import './App.css'

class App extends Component {

    render() {
        return (
            <div className='background'>
                <div className='header'>
                    <div className='headerLeft'>
                        <img src = {pinterest}/>
                        <h3>Home</h3>
                        <h3>Today</h3>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;