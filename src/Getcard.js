import React, { Component } from "react";

class Getcard extends Component {
  // Data
  state = {
    chapter: this.props.chapter
  };
  // Functions
  componentWillMount() {
    console.log(this.props);
  }

  // Render
  render() {
    return (
      <li
        className={this.state.chapter.active ? "active" : ""}
        onClick={() => this.props.getCards(this.state.chapter._id)}
      >
        # {this.state.chapter.name}
      </li>
    );
  }
}

export default Getcard;
