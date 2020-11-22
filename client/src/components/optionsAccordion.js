/*
    Zachary Miller
    this component renders extra advanced options for creating a poll
    these options are hidden and set to defaults as a user may not to 
    view them when trying to make a poll quickly
    This page uses React-Bootstrap components, documentation found at: https://react-bootstrap.github.io/
*/

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


export default function optionsAccordion(){

    return(
        <Accordion style={{paddingBottom: '20px'}}> 
            <Card>{/* accordion designed based on React-Bootstrap accordion documentation: https://react-bootstrap.netlify.app/components/accordion/ */}
                <Accordion.Toggle as={Card.Header} style={{textAlign: 'center'}} eventKey="0">{/* accordion toggle rendered as a card heading, eventkey of zero identifies this as the first (only) panel in accordion */}
                    <h3>View advanced settings</h3>{/* "as" tag allows any click on the header to toggle the accordion collapse */}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">{/* ".Collapse" tag designates accordion content body of first (only) content area */}
                    <Card.Body>
                        <Form.Group>
                            <span> Allow anonymous voters: &emsp; </span>{/* form design based on React-Bootstrap form documentation: https://react-bootstrap.netlify.app/components/forms/ */}
                            <Form.Check inline defaultChecked type={'radio'} label="On" id="anonOn" name="anonPostRadio"></Form.Check>{/* form content is basic inline radio buttons for turning anonymous voting and display poll results on and off */}
                            <Form.Check inline type={'radio'} label="Off" id="anonOff" name="anonPostRadio"></Form.Check>{/* default settings are checked so user can just submit the form if they don't want to set these advanced options */}
                            <hr/>
                            <span> Display results to voters: &emsp; </span>
                            <Form.Check inline type={'radio'} label="On" id="showResultsOn" name="showResultsRadio"></Form.Check>
                            <Form.Check inline defaultChecked type={'radio'} label="Off" id="showResultsOff" name="showResultsRadio"></Form.Check>
                        </Form.Group>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )        
}
