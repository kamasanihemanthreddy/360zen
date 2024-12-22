import * as React from 'react';
import logo from './images/360zen.png';
import banner from './images/banner_1.jpg';
import './App.css'
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import Substract from './images/Subtract.png'

function App() {
  
  return (
    <Carousel data-bs-theme="light"
              controls={false}
              indicators={false}>
                
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={banner}
          alt="First slide"
        />
        <Carousel.Caption className='custom-carousel-caption'>
          <h3 className="header-title" >Experience Your Space Like Never Before</h3>
          <p className="header-caption">Immersive 360° Virtual Tours for Real Estate, Businesses, and More.</p>
          
        </Carousel.Caption>
        <Carousel.Caption className='substract-caption'>
          <a ><img className='substract-img' src={Substract}></img></a>
        </Carousel.Caption>
      </Carousel.Item>
      {/* /* <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
      <Carousel.Caption>
        <a ><img></img>new test</a>
        </Carousel.Caption>
        </Carousel.Item> */}
    </Carousel> 

  );
}
export default App;


