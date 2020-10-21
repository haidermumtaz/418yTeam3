import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OptionsAccordion from '../PollifyJSXElements/optionsAccordion';
import PollSelections from '../PollifyJSXElements/pollSelections';

export default function PollCreation(){



    return(
        <Container fluid>
            <Row>
                <Col lg={{span: 8, offset: 2}} style={{paddingTop: '20px', paddingBottom: '20px'}} >
                    
                    <Card >
                        <Card.Header style={{backgroundColor: '#243240', paddingTop: '40px', color: 'white'}} className="text-center">
                            
                            <h2 style={{paddingBottom: '20px'}}> Welcome to <span style={{color: 'yellow'}}>P</span>ollify! - Create and share polls easily! </h2>                            
                            <h3> Enter a question and answer selections below. Customize your poll options or hit Create Poll to get your poll out there!</h3> 
                        </Card.Header>
                        <Card.Body style={{backgroundColor: '#00FFFF'}}>
                            <PollSelections/>
                            <hr/>
                            <h3 style={{textAlign: 'center'}}> Settings: </h3>
                            <Form.Group controlId="formBasicCheckbox" style={{fontSize: '20px', textAlign: 'center'}}>
                                <Form.Check inline type="checkbox" id="autoEndVotingCheck" label="&nbsp; Automatically End Voting &emsp;" />
                                <Button>&#10068; </Button> &emsp;
                                <Form.Check inline type="checkbox" id="multipleSelectCheck" label="&nbsp; Allow multiple selections &emsp;" />
                                <Button>&#10068; </Button> &emsp;
                                <span> Poll availability: &nbsp; </span>
                                <Form.Check inline defaultChecked type={'radio'} label="Public" id="public" name="publicPrivateToggle"></Form.Check>
                                <Form.Check inline type={'radio'} label="Private" id="private" name="publicPrivateToggle"></Form.Check> &nbsp;
                                <Button>&#10068; </Button> &emsp;
                            </Form.Group>
                            <OptionsAccordion/>
                            <Button style={{fontSize: '34px', paddingTop: '20px', paddingBottom: '20px', paddingRight: '40px', paddingLeft: '40px'}} block>Create Poll</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )


}