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
  //getChapter allows you to get one chapter at a time based on ID
  getChapter = id => {
    axios
      .get(`http://localhost:4000/api/chapter/${id}`)
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
  //we pass getChapter to sidebar so we can render the names in the sidebar
  //we pass states of the chapter to the chapters
  render() {
    return (
      <div>
        <div id="header">
          <div id="logo">
            <img src={Logo} />
          </div>
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
