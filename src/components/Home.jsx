import React from 'react';
import './Home.css';
import Model from '../imajes/HouseModel.png';
import SolarPanel from '../imajes/SolarPanel_Icon.svg';
import Wiring from '../imajes/wiring.svg';

const Home = () => {
    return(
        <div class="main-contanier">
        <div class="image">
            <img src={Model} alt="HouseModel"/>
        </div>
        <div class="icon">
            <div class="heading">
                <h2>Professional Solar Installation</h2>
            </div>
            <div style={{width: '100px'}}>
                <img src={SolarPanel} alt="Solar panel"/>

            </div>
        </div>
        <div class="buttons">
            <div class="paragraph">
                <p>Power up your lives</p>
            </div>
            <div class="para2">
                <p>Make the switch with our skilled experts</p>
            </div>
            <div class="learn">
                <a href="#learnMore">Learn More</a>
            </div>
            <div class="quote">
                <a href="#getQoute">Get a Quote</a>
            </div>
            <div class="image-hover">
            </div>
                <img src={Wiring} alt="v"/>
            </div>
    </div>
    );
}

export default Home;