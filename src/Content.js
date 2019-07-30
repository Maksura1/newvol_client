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
    ],
    view: "chapter"
  };
  // Functions
  changeView = view => {
    this.setState({ view });
  };
  // Render
  render() {
    return (
      <div>
        <button onClick={() => this.changeView("chapter")}>Read</button>
        <button onClick={() => this.changeView("flashcards")}>
          Flashcards
        </button>
        <button onClick={() => this.changeView("quizzes")}>Quizzes</button>
        <div id="content">
          {this.state.view === "chapter" ? (
            <div id="chapter">
              <p>Chapter Text goes here</p>
            </div>
          ) : (
            ""
          )}
          {this.state.view === "flashcards" ? (
            <div id="flashcards">
              {this.state.flashcards.map(f => {
                return <Flashcard flashcard={f} />;
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Content;
