import React, {Component} from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import IntroText from './IntroText';

export class Intro extends React.Component {

    render() {
        return (
            <Jumbotron fluid className="intro">
                <Container>
                    <IntroText />
                    <p className="shortBio">
                        I am a rising senior at the University of Washington studying<a target="blank" href="https://ischool.uw.edu/programs/informatics"> Informatics</a>.
                    </p>
                </Container>
            </Jumbotron>
        )
    }
}