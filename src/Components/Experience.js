import React, {Component, useState} from 'react';
import {
    Jumbotron,
    Container,
    Button
} from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Experience(props) {
        const [open, setOpen] = useState(false);
        return ( 
        <Jumbotron fluid className = "col-lg proj" >
            <Container >
                <h3 > {props.posName}, {props.comp}</h3>
                <p className="shortDesc" >
                    {props.desc}
                </p>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <p>
                            {props.long}
                        </p>
                        <h6>
                            <a target="blank" href={props.url}>
                                <FontAwesomeIcon icon={faLink}/> Link to {props.comp}
                            </a>
                        </h6>

                    </div>
                </Collapse>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    variant="outline-dark"
                >
                    {!open ? "see more" : "see less"}
                </Button>
            </Container>
        </Jumbotron>
        )
    // }
}

export default Experience;