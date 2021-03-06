import React, { Component } from "react";
// import "./Flashcard.css";
import "../Main/App.css";
import Logo from "./log.png";
import axios from "axios";
import Card from "./Card";

class Flashcard extends Component {
  // Data
  state = {
    words: [],
    chapter: [],
    selectedChapter: ""
  };

  // Functions

  getChapter = () => {
    axios
      .get(`${process.env.REACT_APP_API}/api/chapters`)
      .then(res => {
        this.setState(
          {
            chapter: res.data
          },
          () => console.log("chapters", this.state.chapter)
        );
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  //render words when chapter id is passed in
  getFlashcards = id => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/words?chapter=${this.state.selectedChapter}`
      )
      .then(res => {
        this.setState({
          words: res.data
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  getAllFlashcards = () => {
    axios.get(`${process.env.REACT_APP_API}/api/words`).then(res => {
      this.setState(
        {
          words: res.data
        },
        () => console.log(this.state.words)
      );
    });
  };

  setChapter = id => {
    this.setState(
      {
        selectedChapter: id
      },
      () => this.getFlashcards()
    );
  };

  componentDidMount() {
    this.getAllFlashcards();
    this.getChapter();
  }
  // Render

  render() {
    return (
      <div>
        <div id="header">
          //{" "}
          <div id="logo">
            // <img src={Logo} alt="logo" />
            //{" "}
          </div>
        </div>

        <div id="buttons">
          <a href="/"> Home </a>
          <a href="/quiz"> Quiz </a>
        </div>

        <div id="wrap">
          <div className="chapterSidebar">
            <ul>
              {this.state.chapter.map(c => {
                return (
                  <li onClick={() => this.setChapter(c._id)} key={c._id}>
                    {" "}
                    {c.name}{" "}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flashcardContainer">
            {" "}
            {this.state.words.map(w => {
              return <Card key={w._id} word={w} />;
            })}{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Flashcard;
