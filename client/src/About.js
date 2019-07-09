import React, { Component } from 'react';
import './css/style.css';
import './css/about.css';
import Logo from './images/logo.png';

class About extends Component {
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
                    <a className="nav-link" id="link3" href="/search">Search</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/protected" id="login">Log
                        In</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="row">
        <section class="hero" id="aboutUs"> 
            <div class="hero-inner">
                <h2 id="whoWeAre">Who We Are at FoundTable</h2>
                <br/>
                <p><strong>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique rhoncus dui eget dapibus. Maecenas et egestas ante. Aliquam rutrum commodo orci non placerat. Fusce semper lectus leo, non rhoncus eros sodales at. Vivamus fringilla varius erat, sit amet eleifend nunc dictum vitae. Suspendisse eget commodo tortor. Donec vestibulum semper sapien, a sodales sem vehicula ut. Suspendisse sed imperdiet metus. Etiam blandit vitae ipsum ut convallis. Proin in consectetur lacus. Sed nec placerat lorem. Aliquam lacus magna, venenatis quis libero sed, posuere laoreet erat. In lorem ipsum, ornare non gravida in, commodo nec sapien.
</strong></p>
        <p> 
           <strong>     Praesent consectetur, justo vitae sodales tristique, nisi velit cursus sapien, eget pharetra erat tortor ut nibh. Vestibulum mattis metus in risus semper accumsan. Vestibulum tincidunt lobortis gravida. Mauris at quam at elit gravida tincidunt ut quis felis. Donec non mollis nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque imperdiet augue ultricies nunc tincidunt commodo.
           </strong>     </p>
        <p>
           <strong>     Aenean fringilla ullamcorper cursus. Mauris ac tempor ipsum. Maecenas tempor enim non eleifend aliquet. Nullam tempus pulvinar arcu, a venenatis sapien finibus a. Proin id dictum libero. Nunc vel ante vehicula, laoreet velit suscipit, tincidunt justo. Vestibulum nunc purus, consectetur in cursus non, feugiat ac mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu justo sit amet arcu cursus ultricies vitae at felis. Integer ut tortor et mauris mollis accumsan a at nibh. Vestibulum ut sem sit amet leo efficitur bibendum vel in quam.
           </strong>  </p>
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
            <a href="/search" id="footerLink3">Search</a>
            
            <br/><br/>

        </div>




    </footer>
    </div>
    );
  }
}

export default About;
