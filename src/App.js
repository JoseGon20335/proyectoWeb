import React, { Component } from 'react';
import './App.css';
import { data_list } from './posts';
import { emote_list } from './interracion';
import pinterest from './img/logo.png';
import user from './img/user.png';
import mensaje from './img/msg.png';
import busqueda from './img/search.png';
import notificacion from './img/bell.png';
import flecha from './img/arrow.png'
import compa from './img/share.png'
import dots from './img/dots.png'
class App extends Component {
  render() {
    return (
        
      <div className="background">
        
        <div className="header">
          <div className="headerLeft">
            <img src={pinterest} />
            <h3 className="focusBlack">Home</h3>
            <h3 className="focusWhite">Today</h3>
          </div>

          <div className="headerMid">
            <img src={busqueda} />
            <input type="text" placeholder="Search"/>
            
          </div>

          <div className="headerRight">
            <img src={notificacion} />
            <img src={mensaje} />
            <img src={user} />
            <img src={flecha} />
          </div>
        </div>

        <div className="MainContent">
            {
              data_list.map((object, index = 0) => (
                  <div className="postInfo" key={object.key}>
                      <div className={"hover ".concat(object.size)}>
                        <button className='guardar'>GUARDAR</button>
                        <div className={"postBotones ".concat(object.size)}>
                          <img src={compa} />
                          <img src={dots} />
                        </div>
                      </div>
                      <img src={object.img} />
          
                      <div className="interracion">
                          {
                              emote_list.map((emote, index2 = 0) => (
                                  <div>
                                      <img src={emote.img} />
                                  </div>
                              ))
                          }
                      </div>
                  </div>
              ))
            }
        </div>
      </div>
    );
  }
}

export default App;
