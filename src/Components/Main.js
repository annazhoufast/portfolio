import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from './Home.js';
import {About} from './About.js';

export class Main extends React.Component {
	render() {
		return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
            </Switch>
		);
	}
}