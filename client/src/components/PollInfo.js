/* Zachary Miller poll information card, used with poll menu 
   September 23rd, 2020  
*/
//TODO: use modals to verify deletion

import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function PollInfo(props){  

    const [isFavorite, toggleFavorite] = React.useState(props.poll.favorited); //State hook to control favoriting of polls within menu
    const [isClosed, closePollHook] = React.useState(props.poll.closed);
    const [isDeleted, deletePollHook] = React.useState(false);
    
    function favoriteEvent (){
        toggleFavorite(!isFavorite);
    }
    function closePoll(){
        closePollHook(!isClosed);
    }
    function deletePoll(){
        deletePollHook(true);
    }

    return(
        <div>
            {isDeleted ? 
                <h2> {props.poll.title} was deleted. </h2> :
                <Card style={{backgroundColor: '#00FFFF'}}> 
                    
                    <Card.Header style={{backgroundColor: '#243240'}}><h3 style={{color: 'white'}}><a>{props.poll.title}</a> - Posted: {props.poll.postDate} </h3></Card.Header>
                        <Card.Body>
                            <Row> 
                                <Col>
                                <h4>Total Votes: {props.poll.votes} &emsp; </h4>
                                {props.poll.closeDate !== 'null' ?
                                     <h4> Closes: {props.poll.closeDate}</h4> :
                                    <div></div>
                                }
                                </Col>
                                <Col className='text-right'>
                                    {isClosed ?
                                        <text style={{fontSize: '22px'}}> Voting is closed </text> :
                                        <Button onClick={closePoll} variant='primary'> Close Voting &#9746; </Button>
                                    }

                                    &emsp;
                                    <Button onClick={deletePoll} variant='danger'> Delete Poll &#9747; </Button>
                                    &emsp;
                                    {isFavorite ? 
                                        <Button onClick={favoriteEvent} variant='warning'> Unfavorite &#9734; </Button> :
                                        <Button onClick={favoriteEvent} variant='warning'> Favorite &#9734; </Button>
                                    }
                                    
                                </Col>
                                            
                            </Row>
                        </Card.Body>
                    </Card>
                }
            <br/>

        </div>
    )
}