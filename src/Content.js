import React, {Component} from 'react'
import './Content.css';

class Content extends Component {
	// Data
	// Functions
	// Render
	render() {
		return (
			<div id="content">
    <div className="container" ontouchstart="this.classList.toggle('hover');">
      <div className="card">
    <div className="card_front">
      <h1 className="card-symbol">&#128628;</h1>
    </div>

    <div className="card_back">
      <h1 className="card-symbol">&#128628;</h1>
      <div className="card-text">
        <p>The word <strong>ampersand</strong> is a corruption of the phrase "and per se & (and)", meaning "and intrinsically the word and (represented by the symbol &)".</p>
      <p>The ampersand can be traced back to the 1st century A.D. and the Old Roman cursive, in which the letters E and T occasionally were written together to form a ligature.</p>
      </div>
    </div>

  </div>
</div>


			</div>
		)
	}
}

export default Content;
