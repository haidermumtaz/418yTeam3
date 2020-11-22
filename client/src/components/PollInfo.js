/* 
   Zachary Miller 
   this component is a poll information card that is used to render a polls information and basic options
   this component is used within poll menu and allows for poll favoriting, poll closing, and poll deletion
   This page uses React-Bootstrap components, documentation found at: https://react-bootstrap.github.io/
   This page also uses state hooks, made referencing React documentation: https://reactjs.org/docs/hooks-state.html
   Some HTML symbols were refenced via: https://www.w3schools.com/charsets/ref_utf_symbols.asp
*/

import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function PollInfo(props){  

    const [isFavorite, toggleFavorite] = React.useState(props.poll.favorited); //State hook to control favoriting of polls within menu
    const [isClosed, closePollHook] = React.useState(props.poll.closed); //State hook to control closing voting on a poll
    const [isDeleted, deletePollHook] = React.useState(false);  //State hook to delete a poll 
    
    function favoriteEvent(){  //Following functions toggle the state of a poll once their respective button is pressed, this rerenders the page and changes some components appearance
        toggleFavorite(!isFavorite);
    }
    function closePoll(){
        closePollHook(!isClosed);
    }
    function deletePoll(){
        deletePollHook(true);
    }

    return(
        <div>{/* ternary operator checking deleted state, renders that a poll was deleted or poll's info card based on this */}
            {isDeleted ? 
                <h2> {props.poll.title} was deleted. </h2> :  
                <Card style={{backgroundColor: '#00FFFF'}}>{/* React-Bootstrap Card documentation referenced for card design: https://react-bootstrap.netlify.app/components/cards/ */}
                    <Card.Header style={{backgroundColor: '#243240'}}><h3 style={{color: 'white'}}><a>{props.poll.title}</a> - Posted: {props.poll.postDate} </h3></Card.Header>
                        <Card.Body>{/* header and body renders poll information passed by props (title, post date, close date, votes on poll) */}
                            <Row> 
                                <Col>
                                <h4>Total Votes: {props.poll.votes} &emsp; </h4>{/* Ternary operator renders voting close date, if there is one*/}
                                {props.poll.closeDate !== 'null' ?
                                     <h4> Closes: {props.poll.closeDate}</h4> :
                                    <div></div>
                                }
                                </Col>
                                <Col className='text-right'>
                                    {isClosed ?
                                        <text style={{fontSize: '22px'}}> Voting is closed </text> :
                                        <Button onClick={closePoll} variant='primary'> Close Voting &#9746; </Button>
                                    }{/* Above ternary operator renders that voting is closed, if close voting button was pressed, or poll was already closed */}

                                    &emsp;
                                    <Button onClick={deletePoll} variant='danger'> Delete Poll &#9747; </Button>
                                    &emsp;{/* Below ternary operator renders favorite/unfavorite button depending on poll's favorite status, will be rerendered upon button press */}
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