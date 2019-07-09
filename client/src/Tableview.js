import React, { Component } from 'react';
import './css/style.css';
import './css/tableview.css';
import Logo from './images/logo.png';
import BlueBooth1 from './tables/booth-table-blue-one.png';
import BlueBooth2 from './tables/booth-table-blue-two.png';
import BlueLong1 from './tables/long-table-blue-one.png';
import BlueLong2 from './tables/long-table-blue-two.png';
import RedLong2 from './tables/long-table-red-two.png';
import BlueRound1 from './tables/round-table-blue-one.png';
import BlueRound2 from './tables/round-table-blue-two.png';
import RedRound1 from './tables/round-table-red-one.png';
import RedRound2 from './tables/round-table-red-two.png';

class Tableview extends Component {
  render() {
    return (
    <div className="App">
     <nav className="navbar navbar-expand-md navbar-dark bg-light" id="navbar">
        <div className="mx-auto order-0">
            <a className="navbar-brand mx-auto" href="#">
                <img src={Logo} width="230" height="50" alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" id="link1" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="link2" href="/search">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="link3" href="/about">About</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/protected" id="login">Log
                        In</a>
                </li>
            </ul>
        </div>
    </nav>

    <div className="row" id="tablePicker">
        <div className="col-md-2">
            <img className="tableBlue" src={BlueBooth2}/>
            <img className="tableBlue" src={BlueLong1}/>
            <img className="tableBlue" src={BlueLong1}/>
            <img className="tableBlue" src={BlueLong1}/>
            <img className="tableBlue" src={BlueLong2}/>
            <img className="tableBlue" src={BlueLong2}/>
            <img className="tableRed" src={RedLong2}/>
        </div>

        <div className="col-md-2" id="column2">
            <img className="tableBlue" src={BlueRound1}/>
            <img className="tableBlue" src={BlueRound1}/>
            <img className="tableRed" src={RedRound1}/>
            <h4 id="bar">
                Bar Area</h4>
            <img className="tableRed" src={RedRound1}/>
            <img className="tableBlue" src={BlueRound1}/>
            <img className="tableRed" src={RedRound1}/>
        </div>

        <div className="col-md-3" id="column3">
            <h8><img src={BlueRound1} id="available"/> = Available<img
                    src={RedRound1} id="taken"/> = Taken</h8>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <img className="tableRed" src={RedRound2}/>
            <img className="tableBlue" src={BlueBooth2}/>
            <h4 id="lounge">
                Piano Lounge</h4>
            <br/>
            <img className="tableBlue" src={BlueBooth1}/>
            <img className="tableBlue" src={BlueRound2}/>
        </div>

        <div className="col-md-2">
            <img className="tableBlue" src={BlueRound1}/>
            <img className="tableBlue" src={BlueRound1}/>
            <img className="tableRed" src={RedRound1}/>
            <br/><br/><br/><br/><br/><br/>
            <img className="tableRed" src={RedRound1}/>
            <img className="tableBlue" src={BlueRound1}/>
            <img className="tableRed" src={RedRound1}/>
        </div>

        <div className="col-md-3" id="column5">
            <br/>
            <h8 id="mens">
                Men's Restroom</h8>
            <h8 id="womens">
                Women's Restroom</h8>
            <h6 id="lobby">
                Host/Lobby Area</h6>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h8 id="patio">
                Exit to Patio/Smoking Area</h8>

        </div>

    </div>

    <footer id="footer">
        <div className="col-md-6" id="footerColumn">
            <img src={Logo} width="230" height="50" alt="" id="footerLogo"/>
            <br/>
            <h8>Copyright FoundTable Inc.</h8>
            <br/><br/>
            <a href="/" id="footerLink1">Home</a>
            <a href="/search" id="footerLink2">Search</a>
            <a href="/about" id="footerLink3">About</a>
            
            <br/><br/>

        </div>




    </footer>
    </div>
    );
  }
}

export default Tableview;
