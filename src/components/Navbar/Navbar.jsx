import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { Link } from "gatsby";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div id="Navbar">
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
            integrity="sha384-kW+oWsYx3YpxvjtZjFXqazFpA7UP/MbiY4jvs+RWZo2+N94PFZ36T6TFkc9O3qoB"
            crossorigin="anonymous"
          />
          <title>Andre Jarboe| Home</title>
        </Helmet>
        <nav className="nav-center" role="navigation">
            <Link exact to="/" id="title">
              Andre Jarboe
            </Link>
          <div className="nav-wrapper container">
            <div className="social">
                <Link exact to="https://www.instagram.com/andre.jarboe/" >
                  <i className="fab fa-instagram " />
                </Link>
                <Link to="https://www.facebook.com/andrejarboeii/" target="_blank">
                  <i className="fab fa-facebook " />
                </Link>
                <Link to="https://www.instagram.com/andrejarboeii/" target="_blank">
                  <i className="fab fa-twitter " />
                </Link>
                <Link to="https://www.instagram.com/andrejarboeii/" target="_blank">
                  <i className="fab fa-imdb" />
                </Link>
                <Link to="https://www.instagram.com/andrejarboeii/" target="_blank">
                  <i className="fab fa-youtube " />
                </Link>
                <Link to="https://www.instagram.com/andrejarboeii/" target="_blank">
                  <i className="fab fa-instagram " />
                </Link>
              </div>
            <ul>
              <li>
                <Link exact to="/" className="" activeClassName="active">
                  Home
                </Link>
              </li>
              <li>
                <Link exact to="/about" className="" activeClassName="active">
                  About
                </Link>
              </li>
              <li>
                <Link exact to="/reels" className="" activeClassName="active">
                  Reels
                </Link>
              </li>
              <li>
                <Link exact to="/headshots" className="" activeClassName="active">
                  Headshots
                </Link>
              </li>
              <li>
                <Link exact to="/resume" className="" activeClassName="active">
                  Resume
                </Link>
              </li>
              <li>
                <Link exact to="/pictures" className="" activeClassName="active">
                  Pictures
                </Link>
              </li>
              <li>
                <Link exact to="/blog" className="" activeClassName="active">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
