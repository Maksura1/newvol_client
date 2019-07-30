import React, {Component} from 'react'


class Flashcard extends Component {
	// Data

	// Functions
	// Render
	render() {
		return (
			<div className="container" onTouchStart="this.classList.toggle('hover');">

				 <div className="card">

			       <div className="card_front">
			        <h1 className="word">{this.props.flashcard.word}</h1>
			       </div>

			    <div className="card_back">
			      <div className="image"> </div>
			      <div className="definition">{this.props.flashcard.definition}</div>
						<div className="sentence"> This is a sentence usingt the <strong> {this.props.flashcard.word} </strong> </div>
			    </div>

			  </div>
			</div>

		)
	}
}

export default Flashcard
