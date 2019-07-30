import React, {Component} from 'react'
import './Sidebar.css';
import Chapter from './Chapter'

class Sidebar extends Component {
	// Data
	state = {
		workspace: 'Flahshcards',
		chapters: [
			{
				id: 1,
				name: 'Chapter 1'
			}, {
				id: 2,
				name: 'Chapter 2'
			}, {
				id: 3,
				name: 'Chapter 3'
			}
		]
	}
	// Functions
	// Render
	render() {
		return (
			<div id="sidebar">
			   <h3> {this.state.workspace} </h3>
         <ul classname ="flashcards" className ="list-unstyled">
				 {
					this.state.chapters.map((c) => {
						return <Chapter />
					})
				}
         </ul>
			</div>
		)
	}
}

export default Sidebar;
