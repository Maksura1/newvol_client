import React, { Component } from "react";
import "./Sidebar.css";
import Chapter from "./Chapter";
import axios from "axios";

class Sidebar extends Component {
  // Data
  state = {
    chapters: []
  };
  // Functions
  //this function loads the chapter data
  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/api/chapters`)
      .then(res => {
        this.setState({
          chapters: res.data
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }
  // Render
  //sidebar has access to getChapter because it has been passed through app
  render() {
    return (
      <div id="sidebar">
        <h3>Chapters</h3>
        <ul className="chapters" className="list-unstyled">
          {this.state.chapters.map(c => {
            return <Chapter chapter={c} getChapter={this.props.getChapter} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
