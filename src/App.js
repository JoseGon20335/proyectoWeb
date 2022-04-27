import React, { Component } from 'react';
import './App.css'
import { data_list } from './posts';
import { emote_list } from './interracion';

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
                        <h3 className='focusBlack'>Home</h3>
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

                <div className='MainContent'>
                    {
                        data_list.map((object,index = 0) =>(
                            <div className='postInfo' key={object.key}>
                                <img src={object.img}/>
                                <div className='interracion'>
                                    {
                                        emote_list.map((emote,index2=0) =>()
                                        )
                                    }
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        );
    }

}

export default App;