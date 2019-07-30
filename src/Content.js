import React, { Component } from "react";
import "./Content.css";
import Flashcard from "./Flashcard";

class Content extends Component {
  // Data
  state = {
    flashcards: [
      {
        id: 1,
        word: "Tony Russo",
        image: "2 Jul 2019 - 9:09AM",
        definition: "Hello World",
        sentence: "Hey this is a sentence"
      },
      {
        id: 2,
        word: "John Smith",
        image: "2 Jul 2019 - 9:12AM",
        definition: "Hey, what up?",
        sentence: "This is another sentence that includes the word"
      }
    ]
  };
  // Functions
  // Render
  render() {
    return (
      <div id="content">
        <div id="flashcard">
          {this.state.flashcards.map(f => {
            return <Flashcard flashcard={f} />;
          })}
        </div>
      </div>
    );
  }
}

export default Content;
