import React from 'react';
import ReactDOM from 'react-dom';
import MyPollsMenu from './pages/MyPollsMenu';
import PollCreation from './pages/PollCreation';
import Footer from './components/Footer/Footer';
import PollifyNavbar from './components/Navigation/Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Poll from './components/poll';

import {Route, Link, BrowserRouter as PollifyRouter} from 'react-router-dom';

export default function PollifyApp(){
    return (
        <PollifyRouter>
            <PollifyNavbar/>
            <Container fluid style={{backgroundImage: `url("https://wallpaperaccess.com/full/1682999.jpg")`}}>
                <Row>
                    <Route path="/mypolls">
                        <MyPollsMenu/>
                    </Route>
                    <Route path="/createpoll">
                        <PollCreation/>
                    </Route>
                    <Route path="/poll">
                        <Poll/>
                    </Route>
                    <Footer/>
                </Row>
            </Container>
        </PollifyRouter>    
    )
}