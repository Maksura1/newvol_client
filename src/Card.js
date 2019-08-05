import React, { Component } from "react";
import "./Flashcard.css";

class Card extends Component {
  // Data
  state = {
    word: this.props.words
  };
  // Functions
  componentWillMount() {
    let word = this.state.word;
    this.setState({ word });
  }
  // Render
  render() {
    return (
      <div id="content">
        <div
          className="container"
          onTouchStart="this.classList.toggle('hover');"
        >
          <div className="card">
            <div className="card_front">
              <h1 className="word">{this.state.word.name}</h1>
            </div>

            <div className="card_back">
              <div className="image"> </div>
              <div className="definition">
                This is the definition of the word. I need to add more words to
                test how it workss! adaa dhfaerh akhsdfehn{" "}
              </div>
              <div className="sentence">
                {" "}
                This is a sentence usingt the <strong> word </strong>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
