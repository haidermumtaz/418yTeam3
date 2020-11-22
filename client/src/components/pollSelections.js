/*
    Zachary Miller/Jordan Le
    this page is a React-Bootstrap form that posts a new poll to the database
    Page look and feel designed by Zachary Miller, API connectivity + axios implemented by Jordan Le
    This page uses React-Bootstrap components, documentation found at: https://react-bootstrap.github.io/
    This page also uses state hooks, made referencing React documentation: https://reactjs.org/docs/hooks-state.html
    This page uses Axios library to handle a POST request for the polls information: https://github.com/axios/axios#example
*/

import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
var axios = require('axios');

export default function PollSelections(){
    
    const [moreOptions, setMoreOptions] = React.useState(0); //State hook intializing a count variable for rendering more poll options (Zachary)

    
    // Added the state for the form data (Jordan)
    const [state, setState] = React.useState({ question: "", field1: "", field2: "", field3: "", field4: "",
        field5: "", field6: "", field7: "", field8: "", field9: ""});

    // handSubmit function used to send form data to database (Jordan) referencing: https://reactjs.org/docs/forms.html
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

    // handleChange function used to control the state variables inside the form (Jordan), also referenced: https://reactjs.org/docs/forms.html
    const handleChange = e => {
        // Ensures the value of the state variable is always up to date
        setState({
          ...state,
          [e.target.name]: e.target.value
        });
    };


    function addOptions (){ //function to update poll option count, first two calls render three additional option each (Zachary)
        

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
        <Form.Group onSubmit={handleSubmit} style={{color: '#04c4c4'}}>{/*Basic styled form using Bootstrap-React textboxes, referenced documentation: https://react-bootstrap.netlify.app/components/forms/ */}
            <Form.Control type="text" size="lg" name = "question" placeholder="Enter your question here!" onChange={handleChange}></Form.Control>
            <hr/>
            <Form.Control type="text" name = "field1" placeholder="Enter option here!" onChange={handleChange}></Form.Control>{/* component design of form done by Zachary, function calls done by Jordan */}
            <br/>
            <Form.Control type="text" name = "field2" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
            <br/>
            <Form.Control type="text" name = "field3" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
            <br/>
            
            {
            moreOptions === 1 ? 
            <div>{/* Above ternary operator checks option count state to render more (or less) input fields */}
                <Form.Control type="text" name = "field4" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
                <br/>
                <Form.Control type="text" name = "field5" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
                <br/>
                <Form.Control type="text" name = "field6" placeholder="Enter option here!" onChange={handleChange}></Form.Control>
                <br/>
                <Button onClick={addOptions} block> Need more options?</Button>{/* (Zachary) Button calls function to render 3 more options, button styling for this page referenced : https://react-bootstrap.netlify.app/components/buttons/ */}
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
                <Button onClick={addOptions} block> Need even more options?</Button>}
            </div>
            }
        &emsp;{/* Below is form submission button, calls axios API POST request (Jordan), styling by Zachary */}
        <Button onClick={handleSubmit} style={{fontSize: '34px', paddingTop: '20px', paddingBottom: '20px', paddingRight: '40px', paddingLeft: '40px'}} block>Create Poll</Button>
        </Form.Group>
    )


}