import React, { Component } from "react";
import "./Flashcard.css";
import Logo from "./logo.png";
import axios from "axios";

import Bar from "./Bar";
import Container from "./Container";

class Flashcard extends Component {
  // Data
  state = {
    words: [],
    chapter: {}
  };

  // Functions
  //render the chapter when the id of the chapter is passed
  getChapter = id => {
    axios
      .get(`http://localhost:5000/api/words?chapter=${id}`)
      .then(res => {
        this.setState({
          chapter: res.data
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  //render words when chapter id is passed in
  getFlashcards = id => {
    axios
      .get(`http://localhost:5000/api/words?chapter=${this.state.chapter._id}`)
      .then(res => {
        this.setState({
          words: res.data
        });
      })
      .catch(err => {
        console.log("err", err);
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
          <Bar getChapter={this.getFlashcards} />
          <Container words={this.state.words} chapter={this.state.chapter} />
        </div>
      </div>
    );
  }
}

export default Flashcard;
