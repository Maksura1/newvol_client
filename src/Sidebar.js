import React, {Component} from 'react'
import './Sidebar.css';

class Sidebar extends Component {
	// Data
	// Functions
	// Render
	render() {
		return (
			<div id="sidebar">
			   <h3> Flashcards </h3>
         <ul classname ="flashcards" className ="list-unstyled">
				   <li className="active"> Chapter 1 </li>
					 <li> Chapter 2 </li>
					 <li> Chapter 3 </li>
					 <li> Chapter 4 </li>
					 <li> Chapter 5 </li>
         </ul>
			</div>
		)
	}
}

export default Sidebar;
