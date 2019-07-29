import React, {Component} from 'react'
import './App.css';
import Sidebar from './Sidebar'
import Content from './Content'
import Logo from './log.png'


class App extends Component {
	// Data
	// Functions
	// Render
	render() {
		return (
 <div>
			<div id="header">
					<div id="logo">
						<img src={Logo} />
					</div>
				</div>

			<div id="wrap">
				<Sidebar />
				<Content />
			</div>
</div>
		)
	}
}

export default App;
