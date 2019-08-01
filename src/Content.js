import React, { Component } from "react";
import "./Content.css";
import Flashcard from "./Flashcard";
import Quiz from "./Quiz";
import axios from "axios";

class Content extends Component {
  // Data
  state = {
    flashcards: [
      // {
      //   id: 1,
      //   word: "Tony Russo",
      //   image: "2 Jul 2019 - 9:09AM",
      //   definition: "Hello World",
      //   sentence: "Hey this is a sentence"
      // },
      // {
      //   id: 2,
      //   word: "John Smith",
      //   image: "2 Jul 2019 - 9:12AM",
      //   definition: "Hey, what up?",
      //   sentence: "This is another sentence that includes the word"
      // }
    ],
    view: "chapter"
  };

  // Functions
  //function that connects us to the words on db
  componentWillMount() {
    axios
      .get("http://localhost:4000/api/words")
      .then(res => {
        this.setState({
          flashcards: res.data
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  componentWillReceiveProps(props) {
    let words = document.getElementById("text").getElementsByClassName("word");
    console.log("words", words);
    document.addEventListener("click", e => {
      if (e.target.classList.contains("word")) {
        console.log("_id", e.target.id);
        // make axios.get request and replace id with e.target.id
      }
    });
  }

  //function that allows us to view either chapter, flashcards or quizzes
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
              <h1>{this.props.chapter.name}</h1>
              <div
                id="text"
                dangerouslySetInnerHTML={{ __html: this.props.chapter.text }}
              ></div>
            </div>
          ) : (
            ""
          )}
          {this.state.view === "flashcards" ? (
            <div id="flashcards">
              <h1>{this.props.chapter.name}</h1>
              {this.state.flashcards.map(f => {
                return <Flashcard flashcard={f} />;
              })}
            </div>
          ) : (
            ""
          )}
          {this.state.view === "quizzes" ? (
            <div id="quizzes">
              <h1>{this.props.chapter.name}</h1>
              <Quiz />;
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
