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
          <nav>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <div class="btn text">
                <nav>{this.state.button.name}</nav>
                <nav>{this.state.button.click}</nav>
              </div>
            </button>
          </nav>
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
                  {this.state.button.title}
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
