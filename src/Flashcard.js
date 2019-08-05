import React, { Component } from "react";
import "./Flashcard.css";
import Bar from "./Bar";
import Cards from "./Cards";
import Logo from "./log.png";

class Flashcard extends Component {
  // Data
  //channel = chapter
  state = {
    chapter: ""
  };
  // Functions
  getCards = id => {
    this.setState({
      chapter: id
    });
  };
  // Render
  render() {
    return (
      <div>
        <div id="header">
          <div id="logo">
            <img src={Logo} alt="logo" />
          </div>
        </div>

        <div id="wrap">
          <Bar getCards={this.getCards} />
          <Cards chapter={this.state.chapter} />
        </div>
      </div>
    );
  }
}

export default Flashcard;
