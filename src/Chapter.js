import React, { Component } from "react";
import axios from "axios";

class Chapter extends Component {
  // Data

  // Functions
  logChapter = () => {
    console.log(this.props.chapter);
    axios
      .get(`http://localhost:4000/api/chapter/${this.props.chapter._id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  // Render
  render() {
    return <li onClick={this.logChapter}>{this.props.chapter.name}</li>;
  }
}

export default Chapter;
