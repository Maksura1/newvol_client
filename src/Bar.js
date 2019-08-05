import React, { Component } from "react";
import "./Bar.css";
import Getcard from "./Getcard";
import axios from "axios";

class Bar extends Component {
  // Data
  state = {
    workspace: "Chapters",
    chapters: []
  };
  // Lifecycle
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API}/api/chapters`)
      .then(res => {
        res.data[0].active = true;
        this.setState({
          chapters: res.data
        });
        this.getCard(res.data[0]._id);
        console.log("res.data[0]", res.data[0]);
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  // Functions
  getCard = id => {
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
        <h2>{this.state.workspace}</h2>
        <h3>Channels</h3>
        <ul className="list-unstyled">
          {this.state.channels.map(c => {
            return (
              <Channel
                channel={c}
                key={c._id}
                selectChannel={this.selectChannel}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
