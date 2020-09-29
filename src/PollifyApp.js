import React from 'react';
import ReactDOM from 'react-dom';
import MyPollsMenu from './PollifyWebpages/MyPollsMenu'
import Footer from './PollifyJSXElements/Footer/Footer';
import Navbar from './PollifyJSXElements/Navigation/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function PollifyApp(){
    return (
        <div style={{backgroundImage: `url("https://wallpaperaccess.com/full/1682999.jpg")`}}>
            <Row>
                <Navbar/>
                <MyPollsMenu/>
                <Footer/>
            </Row>
        </div>
    )
}