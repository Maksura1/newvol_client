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

  // Render
  render() {
    return (
      <div id="flashcards">
        <div
          className="container"
          ontouchstart="this.classList.toggle('hover');"
        >
          <div className="card">
            <div className="card_front">
              <h1 className="card-symbol">&#128628;</h1>
            </div>

            <div className="card_back">
              <h1 className="card-symbol">&#128628;</h1>
              <div className="card-text">
                <p>
                  The word <strong>ampersand</strong> is a corruption of the
                  phrase "and per se & (and)", meaning "and intrinsically the
                  word and (represented by the symbol &)".
                </p>
                <p>
                  The ampersand can be traced back to the 1st century A.D. and
                  the Old Roman cursive, in which the letters E and T
                  occasionally were written together to form a ligature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
