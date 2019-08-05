import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

class Cards extends Component {
  // Data
  state = {
    flashcards: []
  };

  // Functions

  //load flashcards data from api and setState
  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/api/words`)
      .then(res => {
        this.setState({
          flashcards: res.data
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  //filter Currently not working
  // componentWillReceiveProps(props) {
  //   axios
  //     .get(`${process.env.REACT_APP_API}/api/words?chapter=${props.chapter}`)
  //     .then(res => {
  //       this.setState({
  //         words: res.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log("err", err);
  //     });
  // }

  // Render
  render() {
    return (
      <div id="content">
        <div id="flashcards">
          {this.state.flashcards.map(f => {
            return <Card flashcard={f} />;
          })}
        </div>
      </div>
    );
  }
}

export default Cards;
