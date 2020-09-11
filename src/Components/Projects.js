import React, {Component, useState} from 'react';
import {Jumbotron, Container, Modal, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';
import image from "../imgs/walk-buddy.png";


// export class Projects extends React.Component {
function Projects(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const HoverText = styled.p`
        :hover {
            color: #000;
            cursor: pointer;
        }
    `
        return (
            <Jumbotron fluid className="col-lg proj">
                <Container>
                    <h3>
                        {props.posName}, {props.comp}
                    </h3>
                   <p className="shortDesc">
                       {props.desc}
                   </p>
                   <Button variant="outline-dark" onClick={handleShow}>see more!</Button>
                   <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {props.posName}
                        </Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <h5>
                                Tools: {props.tools}
                            </h5>
                            <img src={(props.img)} className="projIg" />
                            <p>
                                {props.long}
                            </p>
                            <div className="row">
                                <h5 className="xIcon">
                                    <FontAwesomeIcon icon={faLink} />
                                </h5>
                                <HoverText>
                                    <a target="blank" href={props.link}>Link to Project</a>
                                </HoverText>
                            </div>
                            <div className="row">
                                <h5 className="xIcon">
                                    <FontAwesomeIcon icon={faGithub} />
                                </h5>
                                <HoverText>
                                    <a target="blank" href={props.git}>Link to Project Repository</a>
                                </HoverText>
                            </div>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                </Container>
            </Jumbotron>
        )
}

export default Projects;