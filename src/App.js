import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Sidebar} from './Components/SideBar.js';

export class App extends React.Component {
	render() {
		return (
			<body>
				<Sidebar></Sidebar>
			</body>
		)
	}
}

export default App;