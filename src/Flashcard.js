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
			        <h1 className="word">Abhor</h1>
			       </div>

			    <div className="card_back">
			      <div className="image"> </div>
			      <div className="definition">This is the definition of the word. I need to add more words to test how it workss!
						adaa dhfaerh akhsdfehn </div>
						<div className="sentence"> This is a sentence usingt the <strong> word </strong> </div>
			    </div>

			  </div>
			</div>

		)
	}
}

export default Flashcard
