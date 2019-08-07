import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./Modal.css";
import axios from "axios";

class Modal extends Component {
  // Data
  state = {
    button: this.props.button
  };
  // Functions
  componentWillMount() {
    console.log(this.props);
  }

  // Render
  render() {
    return (
      <div id="Modal">
        <div class="navigation">
          <button
            type="button"
            className="front"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <div class="btn text">
              <nav>{this.state.button.name}</nav>
              <nav>{this.state.button.click}</nav>
            </div>
          </button>
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
            <div
              className="back"
              style={{ backgroundImage: `url(${this.state.button.image})` }}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Some text or image goes here
                </h5>
              </div>
              <div className="message">{this.state.button.message}</div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                CLOSE HERE!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
