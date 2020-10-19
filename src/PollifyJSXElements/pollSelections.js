import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function PollSelections(){
    
    const [moreOptions, setMoreOptions] = React.useState(0);

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
        <Form.Group style={{color: '#04c4c4'}}>
            <Form.Control type="text" size="lg" placeholder="Enter your question here!"></Form.Control>
            <hr/>
            <Form.Control type="text" placeholder="Enter option here!"></Form.Control>
            <br/>
            <Form.Control type="text" placeholder="Enter option here!"></Form.Control>
            <br/>
            <Form.Control type="text" placeholder="Enter option here!"></Form.Control>
            <br/>
            
            { 
            moreOptions == 1 ? 
            <div>
                <Form.Control type="text" placeholder="Enter option here!"></Form.Control>
                <br/>
                <Form.Control type="text" placeholder="Enter option here!"></Form.Control>
                <br/>
                <Form.Control type="text" placeholder="Enter option here!"></Form.Control>
                <br/>
                <Button onClick={addOptions}> Need more options?</Button>
            </div> : 
            <div>{ moreOptions == 2 ? 
                <div>
                    <Form.Control type="text" placeholder="Enter option here!"></Form.Control>
                    <br/>
                    <Form.Control type="text" placeholder="Enter option here!"></Form.Control>
                    <br/>
                    <Form.Control type="text" placeholder="Enter option here!"></Form.Control>
                    <br/>
                    <Form.Control type="text" placeholder="Enter option here!"></Form.Control>
                    <br/>
                    <Form.Control type="text" placeholder="Enter option here!"></Form.Control>
                    <br/>
                    <Form.Control type="text" placeholder="Enter option here!"></Form.Control>
                    <br/>
                </div> : 
                <Button onClick={addOptions}> Need more options?</Button>}
            </div>
            }                   
        </Form.Group>
    )


}