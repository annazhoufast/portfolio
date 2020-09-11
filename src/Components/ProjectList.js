import React, {Component} from 'react';
import Projects from './Projects';
import { Container } from 'react-bootstrap';
import Images from './Images';
import walk from "../imgs/walk-buddy.png";
import whof from "../imgs/who-free.png";
import emergency from "../imgs/emergency-erd.png";
import parking from "../imgs/google-parking.png";
import thon from "../imgs/DataThon.jpg";


export class ProjectList extends React.Component {
    render() {
        var pData = require("../data/projects.json");
        let projs = [];
        let igs = [];
        igs.push(whof);
        igs.push(walk);
        igs.push(emergency);
        igs.push(parking);
        igs.push(thon);
        for (let i = 0; i < pData.length; i++) {
            projs.push(<Projects posName={pData[i].ProjName} 
                                desc={pData[i].Description} 
                                comp={pData[i].Time}
                                link={pData[i].URL}
                                git={pData[i].Git}
                                img={igs[i]}
                                tools={pData[i].Tools} 
                                long={pData[i].LongerDesc} />);
        }

        return (
            <Container className="projs">
                <h2>{this.props.section_name}</h2>
                {projs}
            </Container>
        )
    }
}