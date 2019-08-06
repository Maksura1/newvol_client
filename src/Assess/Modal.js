import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./Modal.css";
import axios from "axios";

class Modal extends Component {
  // Data
  state = {
    buttons: [
      {
        id: 1,
        name: "Scored a 1/3?",
        click: "Click Here",
        title: "Wow you big buffoon! Go back and Study!!"
      },
      {
        id: 2,
        name: "Scored a 2/3?",
        click: "Click Here",
        title: "Not bad but keep studying!"
      },
      {
        id: 3,
        name: "Scored a 3/3?",
        click: "Click Here",
        title: "Boss!"
      }
    ]
  };
  // Functions

  // Render
  render() {
    return (
      <div id="Modal">
        <div class="navigation">
          {this.state.buttons.map(b => {
            return (
              <nav>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  key={b._id}
                >
                  <div class="btn text">
                    <nav>{b.name}</nav>
                    <nav>{b.click}</nav>
                  </div>
                </button>
              </nav>
            );
          })}
        </div>
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  CLOSE HRE!
                </button>
              </div>
              <div className="Defintion"> Definition: Goes here</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
