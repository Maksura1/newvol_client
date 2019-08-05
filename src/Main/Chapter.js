import React, { Component } from "react";

class Chapter extends Component {
  // Data

  // Functions

  // Render
  render() {
    return (
      <li onClick={() => this.props.getChapter(this.props.chapter._id)}>
        {this.props.chapter.name}
      </li>
    );
  }
}

export default Chapter;
