import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


export default function optionsAccordion(){

    return(
        <Accordion style={{paddingBottom: '20px'}}>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h3>View advanced settings: </h3>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Form.Group>
                            <span> Allow anonymous voters: &emsp; </span> 
                            <Form.Check inline defaultChecked type={'radio'} label="On" id="anonOn" name="anonPostRadio"></Form.Check>
                            <Form.Check inline type={'radio'} label="Off" id="anonOff" name="anonPostRadio"></Form.Check>
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
