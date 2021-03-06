import React, { Component } from "react";
import "./Content.css";
import axios from "axios";

class Content extends Component {
  // Data
  state = {
    chapter: this.props.chapter,
    chapters: [],
    open: false
  };

  // Functions
  getAllChapters = () => {
    axios.get(`${process.env.REACT_APP_API}/api/chapters`).then(res => {
      this.setState(
        {
          chapters: res.data
        },
        () => console.log(this.state.words)
      );
    });
  };

  //function that gets the id of a word when the word is clicked on

  componentWillReceiveProps(props) {
    let words;
    if (document.getElementById("text")) {
      words = document.getElementById("text").getElementsByClassName("word");
    }
    console.log("words", words);
    document.addEventListener("click", e => {
      if (e.target.classList.contains("word")) {
        console.log("_id", e.target.id);
        // make axios.get request and replace id with e.target.id
        axios
          .get(`${process.env.REACT_APP_API}/api/word/${e.target.id}`)
          .then(res => {
            console.log("res !!!!!!!!!", res.data);
            let node = document.createElement("span");
            node.classList.add("popup");
            let textnode = document.createTextNode(
              `${res.data.name}: ${res.data.definition}`
            );
            node.appendChild(textnode);
            e.target.appendChild(node);
          })
          .catch(err => {
            console.log("err", err);
          });
      }
    });
  }

  // createPopup = () => {
  //   let popup;
  //   if (document.getElementById("myPopup")) {
  //     popup = document.getElementsById("myPopup");
  //   }
  //   popup.classList.toggle("show");
  // };

  componentDidMount() {
    this.getAllChapters();
  }

  // Render
  render() {
    return (
      <div id="content">
        <div id="chapter" className="chapter">
          <h1>{this.props.chapter.name}</h1>

          <div
            id="text"
            dangerouslySetInnerHTML={{ __html: this.props.chapter.text }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Content;
