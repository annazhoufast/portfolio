import React, {Component} from 'react';

// import {Sidebar} from './SideBar.js';
import {ProjectList} from './ProjectList.js';
import {Intro} from './Intro';
import {ExperienceList} from './ExperienceList';

export class Home extends React.Component {
	render() {
		return (
            <main>
                <Intro />
                <ExperienceList section_name={"Experience"} />
                <ProjectList section_name={"Projects"} />
            </main>
		);
	}
}