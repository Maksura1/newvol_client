import React, { Component } from "react";
import "./Flashcard.css";
class Flashcard extends Component {
  // Data

  // Functions
  // Render
  render() {
    return (
      <div className="container" onTouchStart="this.classList.toggle('hover');">
        <div className="card">
          <div className="card_front">
            <h1 className="word">{this.props.flashcard.name}</h1>
          </div>

          <div className="card_back">
            <div
              className="image"
              style={{
                backgroundImage: `url(${this.props.flashcard.image})`,
                background: "cover"
              }}
            ></div>
            <div className="definition">
              <strong>Definition:</strong> {this.props.flashcard.definition}
            </div>
            <div className="sentence">
              {" "}
              <strong>Sentence: </strong>
              {this.props.flashcard.sentence}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Flashcard;
