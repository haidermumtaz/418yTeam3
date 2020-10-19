import React from 'react';
import ReactDOM from 'react-dom';
import MyPollsMenu from './PollifyWebpages/MyPollsMenu';
import PollCreation from './PollifyWebpages/PollCreation';
import Footer from './PollifyJSXElements/Footer/Footer';
import PollifyNavbar from './PollifyJSXElements/Navigation/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function PollifyApp(){
    return (
        <div style={{backgroundImage: `url("https://wallpaperaccess.com/full/1682999.jpg")`}}>
            <Row>
                <PollifyNavbar/>
                <PollCreation/>
                <Footer/>
            </Row>
        </div>
    )
}