import * as React from 'react';
import logo from './images/360zen.png';
import banner from './images/banner_1.jpg';
import './App.css'
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import Substract from './images/Subtract.png'
import  desktop from './videos/Desktop.mp4'
import mobile from './videos/Mobile.mp4'
function App() {
  
  return (
    <Carousel data-bs-theme="light"
              controls={false}
              indicators={false}>    
      <Carousel.Item>
        <video
            className="slider-video w-100  desktop-view"
            src={desktop}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          <video
            className="slider-video w-100  mobile-view"
            style={{display:'none'}}
            src={mobile}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
        
        <Carousel.Caption className='custom-carousel-caption'>
          <h3 className="header-title" >Experience Your Space Like Never Before</h3>
          <p className="header-caption">Immersive 360° Virtual Tours for Real Estate, Businesses, and More.</p>
          
        </Carousel.Caption>
        <Carousel.Caption className='substract-caption'>
          <a href="#about-us"><img className='substract-img' src={Substract}></img></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
  );
}
export default App;


