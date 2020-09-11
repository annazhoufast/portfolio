import React, {Component} from 'react';
// import {Projects} from './Projects';
import Experience from './Experience';
import { Container } from 'react-bootstrap';

export class ExperienceList extends React.Component {
    render() {
        var xpData = require("../data/experience.json");
        let projs = [];
        for (let i = 0; i < xpData.length; i++) {
            projs.push(<Experience posName={xpData[i].JobName} 
                                desc={xpData[i].Description} 
                                comp={xpData[i].Company}
                                url={xpData[i].URL}
                                long={xpData[i].LongerDesc} />);
        }
        return (
            <Container className="projs">
                <h2>{this.props.section_name}</h2>
                {projs}
            </Container>
        )
    }
}