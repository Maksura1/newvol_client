import React, { Component } from "react";
import "./Bar.css";
import Getcard from "./Getcard";
import axios from "axios";

class Bar extends Component {
  // Data
  state = {
    chapters: []
  };
  // Lifecycle
  //import chapters data and setState
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API}/api/chapters`)
      .then(res => {
        res.data[0].active = true;
        this.setState({
          chapters: res.data
        });
        this.selectChapter(res.data[0]._id);
        console.log("res.data[0]", res.data[0]);
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  // Functions
  selectChapter = id => {
    let chapters = this.state.chapters;
    chapters.forEach(c => delete c.active);
    let chapter = chapters.find(c => c._id === id);
    chapter.active = true;
    this.setState({ chapters });
    this.props.getCards(id);
  };
  // Render
  render() {
    return (
      <div id="sidebar">
        <h3>Chapters</h3>
        <ul className="list-unstyled">
          {this.state.chapters.map(c => {
            return (
              <Getcard
                chapter={c}
                key={c._id}
                selectChapter={this.selectChannel}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Bar;
