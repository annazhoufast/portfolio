import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import image from "../imgs/DSC_0999.jpg";

export class About extends React.Component {
    render() {
        return (
            <Container id="about">
                <Row>
                    <Col>
                        <Image id="picAnna" src={image}/>
                        <a href="mailto:annaz4@uw.edu">
                            <h4 className="emailTo shortBio">
                                Message Me!
                            </h4>
                        </a>
                    </Col>
                    <Col>
                        <h4 className="shortBio">
                            A lil info about Anna:
                        </h4>
                        <p>
                            As an Informatics student, I strive to find a way to create and design technologies for people to use. 
                            I am a data scientist and developer, but I incorporate human-centered design practices into my work.
                            <br></br>
                            <br></br>
                            Focusing on Data Science and Human Computer Interaction, I use data to tell stories, share experiences, and
                            analyze the human experience. I love working with data visualizations to express answers to social issues and
                            to better understand the relationships between each other and society as a whole. My technical experience coupled 
                            with my life experiences support me as I work towards creating positive technology for others. Nowadays, we are
                            plagued with opinionated articles with little objectivity and facts. So, I also want to utilize
                            my data skills to detect misinformation in news to provide accurate, objective information to citizens in the US. 
                            <br></br>
                            <br></br>
                            Apart from tech, I love experimenting with new recipes (I have joined the sourdough quarantine bakers), reading novels,
                            taking pictures, swimming, painting, and going on long hikes. 
                            <br></br>
                            <br></br>
                            Also, please vote if you are able this year!
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}