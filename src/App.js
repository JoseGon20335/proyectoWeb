import React, { Component } from 'react';
import './App.css'

import pinterest from './img/logo.png'
import user from './img/user.png'
import mensaje from './img/msg.png'
import busqueda from './img/search.png'
import notificacion from './img/bell.png'

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

                    <div className='headerMid'>
                        <img src = {busqueda}/>
                        <h3>Search</h3>
                    </div>

                    <div className='headerRight'>
                        <img src = {notificacion}/>
                        <img src = {mensaje}/>
                        <img src = {user}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;