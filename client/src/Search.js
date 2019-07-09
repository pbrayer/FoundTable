import React, { Component } from 'react';
import './css/style.css';
import './css/search.css';
import Logo from './images/logo.png';

class Search extends Component {
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
                    <a className="nav-link" id="link2" href="/input">Featured Restaurants</a>
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
        <section className="hero" id="searchHero">
            <div className="hero-inner">
                <div className="col-md-12" id="searchColumn">
                    <h2 id="searchTitle">Search by city or style...</h2>

                    <form>
                        <div className="form-row align-items-center">
                            <div className="col-auto my-1">
                                <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option selected>Choose a City</option>
                                    <option value="1">Minneapolis</option>
                                    <option value="2">Chicago</option>
                                    <option value="3">New York</option>
                                </select>
                            </div>
                            <div className="col-auto my-1">
                                <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option selected>Type of Food</option>
                                    <option value="1">American</option>
                                    <option value="2">Italian</option>
                                    <option value="3">Mexican</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <a href="/tableview" className="btn" id="searchButton">Find Table</a>



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
            <a href="/input" id="footerLink2">Featured Restaurants</a>
            <a href="/about" id="footerLink3">About</a>
            
            <br/><br/>

        </div>




    </footer>
    </div>
    );
  }
}

export default Search;
