import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
var axios = require('axios');

export default function PollSelections(){
    
    const [moreOptions, setMoreOptions] = React.useState(0);

    // Added the state for the form data
    const [state, setState] = React.useState({ question: "", field1: "", field2: "", field3: "", field4: "",
        field5: "", field6: "", field7: "", field8: "", field9: ""});

    // handSubmit function used to send form data to database
    const handleSubmit = e => {
        e.preventDefault();
            
        // Posts to the api for createpoll
        axios.post('/api/polls/createpoll', state)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            // If it works then redirect to mainpage
            window.location.href = "http://localhost:3000/"
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    // handChange function used to control the state variables inside the form
    const handleChange = e => {
        // Ensures the value of the state variable is always up to date
        setState({
          ...state,
          [e.target.name]: e.target.value
        });
    };


    function addOptions (){
        

        if (moreOptions === 0){
            setMoreOptions(1);
            console.log(moreOptions);
        }
        else{
            setMoreOptions(2);
            console.log(moreOptions);
        }
        
    }

    return(
        <Form.Group onSubmit={handleSubmit} style={{color: '#04c4c4'}}>
            <Form.Control type="text" size="lg" name = "question" placeholder="Enter your question here!" onChange={handleChange}></Form.Control>
            <hr/>
            <Form.Control type="text" name = "field1" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
            <br/>
            <Form.Control type="text" name = "field2" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
            <br/>
            <Form.Control type="text" name = "field3" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
            <br/>
            
            { 
            moreOptions === 1 ? 
            <div>
                <Form.Control type="text" name = "field4" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
                <br/>
                <Form.Control type="text" name = "field5" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
                <br/>
                <Form.Control type="text" name = "field6" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
                <br/>
                <Button onClick={addOptions} block> Need more options?</Button>
            </div> : 
            <div>{ moreOptions === 2 ? 
                <div>
                    <Form.Control type="text" name = "field4" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
                    <br/>
                    <Form.Control type="text" name = "field5" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
                    <br/>
                    <Form.Control type="text" name = "field6" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
                    <br/>
                    <Form.Control type="text" name = "field7" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
                    <br/>
                    <Form.Control type="text" name = "field8" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
                    <br/>
                    <Form.Control type="text" name = "field9" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
                    <br/>
                </div> : 
                <Button onClick={addOptions} block> Need more options?</Button>}
                <Button onClick={handleSubmit} style={{fontSize: '34px', paddingTop: '20px', paddingBottom: '20px', paddingRight: '40px', paddingLeft: '40px'}} block>Create Poll</Button>
            </div>
            }                   
        </Form.Group>
    )


}