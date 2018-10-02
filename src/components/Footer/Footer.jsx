import React, { Component } from "react";

import { Link } from "gatsby";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Andre Jarboe</h5>
              <p className="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Site Map</h5>
              <ul>
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
                <Link exact to="/about" className="grey-text text-lighten-3"
                    activeClassName="activeFooter">
                  About
                </Link>
              </li>
              <li>
                <Link exact to="/reels" className="grey-text text-lighten-3"
                    activeClassName="activeFooter">
                  Reels
                </Link>
              </li>
              <li>
                <Link exact to="/headshots" className="grey-text text-lighten-3"
                    activeClassName="activeFooter">
                  Headshots
                </Link>
              </li>
              <li>
                <Link exact to="/resume" className="grey-text text-lighten-3"
                    activeClassName="activeFooter">
                  Resume
                </Link>
              </li>
              <li>
                <Link exact to="/pictures" className="grey-text text-lighten-3"
                    activeClassName="activeFooter">
                  Pictures
                </Link>
              </li>
              <li>
                <Link exact to="/blog" className="grey-text text-lighten-3"
                    activeClassName="activeFooter">
                  Blog
                </Link>
              </li>
              </ul>
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
