import React, { Component } from 'react';
import './css/style.css';
import './css/input.css';
import Logo from './images/logo.png';
import Patrons from './images/patrons.jpeg';

class Input extends Component {
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
                    <a className="nav-link" id="link2" href="https://www.murraysrestaurant.com/" target="_blank">Go to Website</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="link3" href="http://www.murraysrestaurant.com/#" target="_blank">View Menu</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/protected" id="login">Log
                        In</a>
                </li>
            </ul>
        </div>
    </nav>
    <div className="row">
        <section className="hero" id="chosenRestaurant">
            <div className="hero-inner">
                <div className="col-md-6" id="findOptions">
                    <h2 id="headline">Find your table now!</h2>
                    <br/>
                    <h4 id="howMany">How Many People are in Your Party?</h4>
                    <div className="form-group" id="formGroup">
                        <select className="form-control" id="sel1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <br/>
                    <h4 id="checkAvailable">Check availability: </h4>
                    <input type="datetime-local" id="meeting-time" name="meeting-time" value="2019-06-30T19:30"
                        min="2019-06-25T00:00" max="2020-06-30T00:00"/>
                    <a href="/tableview" className="btn" id="findTable">Find Table</a>
                </div>
                <div className="col-md-6 mx-auto" id="restaurantInfo">
                    <h1 id="restaurantName">Murray's Steakhouse</h1>
                    <p id="description">
                        In a fast-food, chain-driven, cookie-cutter world, it’s hard to find a true original. A
                        restaurant that proudly holds its ground and doesn’t scamper after every passing trend. Since
                        1946, Murray’s has been that place. Whether you’re looking for a classic cocktail crafted from
                        local spirits or a nationally acclaimed steak, we welcome you. Come in and discover the unique
                        mash-up of new & true that draws people to our landmark location—and keeps them coming back for
                        more.</p>
                    <img src={Patrons} id="happyCouple" height="350" width="350"/>
                </div>
            </div>
        </section>
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

export default Input;
