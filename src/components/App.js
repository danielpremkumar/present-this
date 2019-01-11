import React, { Component } from "react";
import GiftProduct from "./GiftProduct";
import "../style/GiftProduct.css";

class App extends Component {
  render() {
    return (
      <div className="holder">
        <GiftProduct />
        <div className="greeting-image">
          <img src={require("../images/Birthday.png")} alt="img" />

          <div className="xbuttons">
            <p>
              <a href="/" className="activex leftbox">
                Exchange Item
              </a>
            </p>
            <p>
              <a href="/" className="activex">
                Shipping Info
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
