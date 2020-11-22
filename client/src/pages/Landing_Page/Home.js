//Written by Shaniya Malcolm
import React from 'react';
import './home.css';
import Footer from '../../components/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

export default function Home(){
    return(
        <div className = "home-page">
            <section class="home-intro">
                <div class="welcome">
                    <h1>Welcome to <span>P</span>ollify!</h1>
                </div>
            </section>
            <Container className = "features">
                    
                <h1><strong>Features</strong></h1>
                
                <Row>
                    <Col className = 'box'>
                       <h4>VIEW POLLS</h4> 
                       <p>View polls you created and see what people voted on!</p>
                    </Col>
                    <Col className = 'box'>
                        <h4>MAKE A POLL</h4>
                        <p>Easy and simple ways to design and share polls!</p>
                    </Col>
                    <Col className = 'box'>
                        <h4>FREE AND SAFE</h4>
                        <p>Creating a poll is 100% FREE! Pollify ensures your data will be safe!</p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}
