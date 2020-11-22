/*
  Zachary Miller
  This page is a poll creation interface with some basic options
  This pages uses react-bootstrap components, library found at: https://react-bootstrap.github.io/
  This page also contains state hooks, made referencing react documentation: https://reactjs.org/docs/hooks-state.html
*/
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import OptionsAccordion from '../components/optionsAccordion';
import PollSelections from '../components/pollSelections';

export default function PollCreation(){

    const [EndVoteModalStatus, SetEndVoteModalStatus] = React.useState(0);  //create state hook for opening and closing modals
    const [MultSelectModalStatus, SetMultSelectModalStatus] = React.useState(0);
    const [PublicPrivateModalStatus, SetPublicPrivateModalStatus] = React.useState(0);
    
    function OpenEndVoteModal () { //opening modal toggles modal state to open (1)
        SetEndVoteModalStatus(1);
    }

    function CloseEndVoteModal () { //closing modal toggles modal state back to 0 for next open call
        SetEndVoteModalStatus(0);
    }

    function OpenMultSelectModal () {
        SetMultSelectModalStatus(1);
    }

    function CloseMultSelectModal () {
        SetMultSelectModalStatus(0);
    }

    function OpenPublicPrivateModal () {
        SetPublicPrivateModalStatus(1);
    }

    function ClosePublicPrivateModal () {
        SetPublicPrivateModalStatus(0);
    }


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
                                <Button onClick={OpenEndVoteModal}>&#10068; </Button> &emsp;

                                <Modal size="lg" onHide={CloseEndVoteModal} show={EndVoteModalStatus} style={{fontSize: '34px'}}>
                                    <Modal.Header style={{backgroundColor: '#243240', textAlign: 'center', color: 'white'}}>
                                        Automatically End Voting
                                    </Modal.Header>
                                    <Modal.Body style={{backgroundColor: '#00FFFF'}}>
                                        Automatically end voting will close off voting to pollsters after a set period of time.
                                    </Modal.Body>
                                </Modal>

                                <Form.Check inline type="checkbox" id="multipleSelectCheck" label="&nbsp; Allow multiple selections &emsp;" />
                                <Button onClick={OpenMultSelectModal}>&#10068; </Button> &emsp;

                                <Modal size="lg" onHide={CloseMultSelectModal} show={MultSelectModalStatus} style={{fontSize: '34px'}}>
                                    <Modal.Header style={{backgroundColor: '#243240', textAlign: 'center', color: 'white'}}>
                                        Allow Multiple Selections
                                    </Modal.Header>
                                    <Modal.Body style={{backgroundColor: '#00FFFF'}}>
                                        Allow multiple selections allows voters to cast votes for multiple responses. This great for finding general interests, rather than a favorite.
                                    </Modal.Body>
                                </Modal>

                                <span> Poll availability: &nbsp; </span>
                                <Form.Check inline defaultChecked type={'radio'} label="Public" id="public" name="publicPrivateToggle"></Form.Check>
                                <Form.Check inline type={'radio'} label="Private" id="private" name="publicPrivateToggle"></Form.Check> &nbsp;
                                <Button onClick={OpenPublicPrivateModal}>&#10068; </Button> &emsp;

                                <Modal size="lg" onHide={ClosePublicPrivateModal} show={PublicPrivateModalStatus} style={{fontSize: '34px'}}>
                                    <Modal.Header style={{backgroundColor: '#243240', textAlign: 'center', color: 'white'}}>
                                        Public and Private Polls
                                    </Modal.Header>
                                    <Modal.Body style={{backgroundColor: '#00FFFF'}}>
                                        Public polls can be viewed on the public polls page and voted on by anyone. Private polls will only be visible to users given a link to the poll.
                                         Private polls are better for polls with a specific audience in mind, while public polls get everyone involved!
                                    </Modal.Body>
                                </Modal>
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