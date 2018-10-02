import React, { Component } from "react";
import { Link } from "gatsby";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="footer-content row">
            <div className="title">
            <Link
                  exact
                  to="/"
                  className="grey-text text-lighten-3"
                >
                  Andre Jarboe
                </Link>
            </div>
            <div className="social">
            <a href="https://www.instagram.com/andrejarboeii/" target="_blank">
        <i className="fab fa-instagram " />
      </a>
      <a href="https://www.facebook.com/andrejarboeii/" target="_blank">
        <i className="fab fa-facebook " />
      </a>
      <a href="https://www.instagram.com/andrejarboeii/" target="_blank">
        <i className="fab fa-twitter " />
      </a>
      <a href="https://www.instagram.com/andrejarboeii/" target="_blank">
        <i className="fab fa-imdb" />
      </a>
      <a href="https://www.instagram.com/andrejarboeii/" target="_blank">
        <i className="fab fa-youtube " />
      </a>
      <a href="https://www.instagram.com/andrejarboeii/" target="_blank">
        <i className="fab fa-instagram " />
      </a>
            </div>
            <div className="site-map">
              <li>
                <Link
                  exact
                  to="/"
                  className="grey-text text-lighten-3"
                  activeClassName="activeFooter"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  exact
                  to="/about"
                  className="grey-text text-lighten-3"
                  activeClassName="activeFooter"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  exact
                  to="/reels"
                  className="grey-text text-lighten-3"
                  activeClassName="activeFooter"
                >
                  Reels
                </Link>
              </li>

              <li>
                <Link
                  exact
                  to="/headshots"
                  className="grey-text text-lighten-3"
                  activeClassName="activeFooter"
                >
                  Headshots
                </Link>
              </li>
              <li>
                <Link
                  exact
                  to="/resume"
                  className="grey-text text-lighten-3"
                  activeClassName="activeFooter"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  exact
                  to="/pictures"
                  className="grey-text text-lighten-3"
                  activeClassName="activeFooter"
                >
                  Pictures
                </Link>
              </li>
              <li>
                <Link
                  exact
                  to="/blog"
                  className="grey-text text-lighten-3"
                  activeClassName="activeFooter"
                >
                  Blog
                </Link>
              </li>
            </div>
            <div className="design">
              <a href="https://www.jarboestudios.com/" target="_blank">
                Designed and coded by Jarboe studios
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2018 Andre Jarboe
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
