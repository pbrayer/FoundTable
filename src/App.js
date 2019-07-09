import React, { Component } from 'react';
import './css/style.css';
import './css/main.css';
import Logo from './images/logo.png';
import Phones from './images/iPhoneX-Mockup.png';

class App extends Component {
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
                    <a className="nav-link" id="link1" href="/input">Featured Restaurants</a>
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
    <div className="row">
        <section className="hero" id="explainer">
            <div className="hero-inner">
                <div className="col-md-6">
                    <h2 id="headline">Table Reservation System for Your Best Seat in the
                        House</h2>
                    <h4 id="tagline">Helping customers plan, reserve, and pick the best
                        available table for their party.</h4>
                    <a href="/auth/google/callback" className="btn" id="getStarted">Get Started</a>
                </div>
            </div>
        </section>
    </div>
    <div className="row" id="secondRow">
        <div className="col-md-12" id="whyStuff">
            <h4><strong>Why Customers Use FoundTable Reservation System</strong></h4>
            <h6>We deliver a delightful booking solution that saves you time and makes your next dining experience easy
                to plan.</h6>

        </div>
    </div>

    <div className="container" id="steps">
        <div className="row" id="thirdRow">
            <div className="col-md-4 mx-auto">
                <h4 id="howItWorks"><strong>How It Works</strong></h4>
                <hr/>
            </div>

        </div>

        <div className="row mx-auto" id="bullets">

            <h2 id="number1">
                1</h2>
            <h6 id="explainer1">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>

            <h2 id="number2">
                2</h2>
            <h6 id="explainer2">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>

            <h2 id="number3">
                3</h2>
            <h6 id="explainer3">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>

        </div>

    </div>

    <div className="row" id="fourthRow">

        <div className="col-md-7">

            <img src={Phones} alt="" id="phonePic"/>

        </div>

        <div className="col-md-5" id="featuresBreakout">
            <h2 id="featuresTitle">Featured Restaurants</h2>
            <hr/>
            <h6 id="featuresExplain">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
            <a href="#" className="btn" id="viewButton">View</a>

        </div>

    </div>

    <footer id="footer">
        <div className="col-md-6" id="footerColumn">
            <img src={Logo} width="230" height="50" alt="" id="footerLogo"/>
            <br/>
            <h8>Copyright FoundTable Inc.</h8>
            <br/><br/>
            <a href="/input" id="footerLink1">Featured Restaurants</a>
            <a href="/search" id="footerLink2">Search</a>
            <a href="/about" id="footerLink3">About</a>
            
            <br/><br/>

        </div>




    </footer>
    </div>
    );
  }
}

export default App;
