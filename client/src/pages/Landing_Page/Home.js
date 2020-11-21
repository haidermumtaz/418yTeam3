import React from 'react';
import './home.css';
import NavBar from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'

export default function Home(){
    return(
        <div className = "home-page">
            <NavBar />
            <section class="home-intro">
                <div class="welcome">
                    <h1>Welcome to Pollify!</h1>
                </div>
            </section>
            <section class="howto">
                <div class="tutorial">
                    <p><strong> Watch this tutorial on how to make a poll! </strong></p>
                    <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                    Your browser does not support the video tag.
                    </iframe>    
                </div>
            </section>
            <Footer />
        </div>
    );
}