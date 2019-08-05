import React, { Component } from "react";
import "./Flashcard.css";
import Bar from "./Bar";
import Cards from "./Cards";

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
      <div id="wrap">
        <Bar getCards={this.getCards} />
        <Cards chapter={this.state.chapter} />
      </div>
    );
  }
}

export default Flashcard;
