import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./layout.css";

const Layout = ({ children }) => (
  <div className="App Site">
    <Helmet>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
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
    <div className="Site-content">
      <div className="App-header">
        <Navbar />
      </div>
      <div className="main">
        {/* <Main /> */}
        {children}
      </div>
    </div>
    <Footer />
  </div>
);

export default Layout;
