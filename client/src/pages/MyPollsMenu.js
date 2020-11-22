/*
  Zachary Miller
  This page is a poll menu that should render a users polls
  Backend connectivity to retrieve polls was not completed however
  This pages uses react-bootstrap components, library/documentation found at: https://react-bootstrap.github.io/
*/
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PollInfo from '../components/PollInfo';

export default function MyPollsMenu(){
    //Static poll data used to demonstrate poll info card (should be from backend call, however incomplete)
    const polls = [
        {votes: 10, postDate: '12/21/2018', closeDate: '12/24/2018', favorited: true, title:'Dinner Selection', closed: false},
        {votes: 0, postDate: '01/27/1998', closeDate: 'null', favorited: false, title:'Game night games', closed: false},
        {votes: 4, postDate: '08/12/2019', closeDate: '08/20/2019', favorited: true, title:'Best Meeting Time', closed: true},
        {votes: 121, postDate: '09/28/2020', closeDate: '11/20/2020', favorited: false, title:'Favorite Color', closed: false}
    ];

    return(
        
            
        <Container fluid>
            <Row style={{backgroundImage: `url("https://wallpaperaccess.com/full/1682999.jpg")`}}>{/* Wallpaper retrieved from: https://wallpaperaccess.com/mark */}
                <Col lg={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} sm={12} xs={12}>{/* Column formatted so that content "floats" in the center of viewport, and takes up full viewport on smaller devices, references: https://react-bootstrap.netlify.app/components/forms/#forms-auto-sizing */}
                    <Card style={{height: '1100px'}}>{/* Card styling made referencing documentation: https://react-bootstrap.netlify.app/components/cards/ */}
                        <Card.Header style={{backgroundColor: '#243240'}}>
                            <Col>
                                <h1 style={{color: 'white'}}>My <span style={{color: 'yellow'}}>P</span>olls: </h1>
                            </Col>
                            <Col className='text-right'>
                                <h2 style={{color: 'white'}}>
                                    
                                    <Form.Group>{/* (Non-functional) filter radio bar styled referencing: https://react-bootstrap.netlify.app/components/forms/ */}
                                        Filter By: &emsp;
                                        <Form.Check inline type={'radio'} label="Favorites" id="Favorite" name="filterRadio"></Form.Check>
                                        <Form.Check inline type={'radio'} label="Date Posted" id="Posted" name="filterRadio"></Form.Check>
                                        <Form.Check inline type={'radio'} label="Active" id="Active" name="filterRadio"></Form.Check>
                                    </Form.Group>
                                </h2>
                            </Col>
                        </Card.Header>

                        <Card.Body style={{backgroundColor: '#F0F0F0'}}>
                            
                            {polls.map(poll => (<PollInfo poll={poll}></PollInfo>))}{/* Renders all polls in polls array, passing their data as props to info card JSX element */}

                            <Card.Body className='text-center' bg='light'>{/* Link to poll creation page for user convenience */}
                                <h2 style={{color: 'gray'}}>That's all of your polls, click <u><a href="/createpoll">here</a></u> to make more!</h2>
                            </Card.Body>
                        </Card.Body>    
                    </Card>

                </Col>
            </Row>
        </Container>
        
    )

}
