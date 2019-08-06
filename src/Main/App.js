import React, { Component } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Logo from "./log.png";
import axios from "axios";

class App extends Component {
  // Data
  state = {
    chapter: {}
  };

  // Functions
  //renders the chapter when the id of the chapter is passed
  getChapter = id => {
    axios
      .get(`${process.env.REACT_APP_API}/api/chapter/${id}`)
      .then(res => {
        this.setState({
          chapter: res.data
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

        <div id="buttons">
          <span className="mr-4">
            <button>
              <a href="/flashcards"> Flashcards </a>
            </button>
          </span>
          <span className="mr-4">
            <button>
              <a href="/quiz"> Quiz </a>
            </button>
          </span>
        </div>

        <div id="wrap">
          <Sidebar getChapter={this.getChapter} />
          <Content chapter={this.state.chapter} />
        </div>
      </div>
    );
  }
}

export default App;
