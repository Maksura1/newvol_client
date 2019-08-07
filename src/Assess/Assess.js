import React, { Component } from "react";
import Quiz from "./Quiz";
import "./Home.css";
import Logo from "./log.png";
import Modal from "./Modal";

class Assess extends Component {
  // Data
  state = {
    buttons: [
      {
        id: 1,
        name: "Scored a 1/3?",
        click: "Click Here",
        title: "Wow you big buffoon! Go back and Study!!",
        image:
          "https://res.cloudinary.com/dat4zjqfy/image/upload/v1565135469/memes/a7404b51274120ed8202062ffb341a18_g4emy9.jpg"
      },
      {
        id: 2,
        name: "Scored a 2/3?",
        click: "Click Here",
        title: "Not bad but keep studying!",
        image:
          "https://res.cloudinary.com/dat4zjqfy/image/upload/v1565134105/memes/bucket_hct5pe.png"
      },
      {
        id: 3,
        name: "Scored a 3/3?",
        click: "Click Here",
        title: "Boss!",
        image:
          "https://res.cloudinary.com/dat4zjqfy/image/upload/v156534049/memes/0Ccwb_qelkbn.jpg"
      }
    ]
  };
  // Functions

  // Render
  render() {
    return (
      <div>
        <div id="header">
          //{" "}
          <div id="logo">
            // <img src={Logo} alt="logo" />
            //{" "}
          </div>
        </div>

        <div id="buttons">
          <a href="/"> Home </a>
          <a href="/Flashcards"> Study </a>
        </div>

        <div id="wrap">
          <div id="modal">
            {this.state.buttons.map(b => {
              return <Modal button={b} key={b._id} />;
            })}
          </div>
          <div id="quiz">
            <Quiz />
          </div>
        </div>
      </div>
    );
  }
}

export default Assess;
