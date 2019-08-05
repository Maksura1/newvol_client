import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Cards.css";

class Cards extends Component {
  // Data
  state = {
    cards: []
  };

  // Functions

  //load flashcards data from api and setState
  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/api/words`)
      .then(res => {
        this.setState({
          cards: res.data
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  //get words by chater
  componentWillReceiveProps(props) {
    axios
      .get(`${process.env.REACT_APP_API}/api/words?chapter=${props.chapter}`)
      .then(res => {
        this.setState({
          cards: res.data
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }

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
