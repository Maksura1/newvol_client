import React, { Component } from "react";
import "./Home.css";
import axios from "axios";

class Side extends Component {
  // Data
  state = {
    workspace: "Chapters",
    chapter: []
  };
  // Functions
  //load chapter data

  componentWillMount() {
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
  }
  // Render
  render() {
    return (
      <div id="sidebar">
        <h3>{this.state.workspace}</h3>
        {this.state.chapter.map(c => {
          return <h4 key={c._id}> {c.name} </h4>;
        })}
      </div>
    );
  }
}

export default Side;
