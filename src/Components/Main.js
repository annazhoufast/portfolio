import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

// import {Sidebar} from './SideBar.js';
// import {ProjectList} from './ProjectList.js';
// import {Intro} from './Intro';
import {Home} from './Home.js';
import {About} from './About.js';

export class Main extends React.Component {
	render() {
		// console.log(this.state.experience);
		return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
            </Switch>
		);
	}
}