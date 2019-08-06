import React from "react";
import "./style.css";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup\_inner">
          <h1>This is my Popup text</h1>
          <button onClick={this.props.closePopup}>x</button>
        </div>
      </div>
    );
  }
}

export default Popup;
