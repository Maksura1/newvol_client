import React, { Component } from "react";
import "./Flashcard.css";

class Card extends Component {
  // Data
  state = {
    card: this.props.card
  };
  // Functions
  componentWillMount() {
    let card = this.state.card;
    this.setState({ card });
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
              <h1 className="word">{this.props.word.name}</h1>
            </div>

            <div className="card_back">
              <div className="image"></div>
              <div className="definition"> {this.props.word.definition}</div>
              <div className="sentence"> {this.props.word.sentence}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
