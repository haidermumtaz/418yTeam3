import React, { Component } from 'react';
import Poll from 'react-polls';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const pollQuestion = 'What is your favorite color';
const pollAnswers = [
    {option: 'Red', votes: 0},
    {option: 'Green', votes: 0},
    {option: 'Blue', votes: 0},
    {option: 'Yellow', votes: 0}
]

const pollStyle ={
    theme: 'blue',
    questionColor: '#4F70D6',
    align: 'center',
    questionBold: false,
    questionSeparator: false,

}

class PollInterface extends Component{
    state = {
        pollAnswers: [...pollAnswers]
    }

    handleVote = voteAnswer => {
        const { pollAnswers } = this.state
        const newPollAnswers = pollAnswers.map(answer => {
            if(answer.option === voteAnswer) answer.votes++;
            return answer
        })
        this.setState ({
            pollAnswers : newPollAnswers
        })
    }
    render(){
        const { pollAnswers } = this.state

    return(
        <Container fluid>
            <Row>
                <Col style={{offsetleft: '40px'}}>
                    <Poll  question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} noStorage={true} vote={'React'} customStyles={pollStyle}/>
                </Col>            
            </Row>
        </Container>
    )
}
}
export default PollInterface;