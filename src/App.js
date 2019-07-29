import React, {Component} from 'react'
import './App.css';
import Sidebar from './Sidebar'
import Content from './Content'

class App extends Component {
	// Data
	// Functions
	// Render
	render() {
		return (
			<div id="wrap">
				<Sidebar />
				<Content />
			</div>
		)
	}
}

export default App;
