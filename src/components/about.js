import * as React from 'react';
import vr from '../images/vr.png'
import Button from 'react-bootstrap/Button';
import { Col, NavbarText, Row } from 'react-bootstrap';


function App() {
  
  return (
    <section className='bg-default' id="about-us"> 
        <div className='p-2'>
        <Row className='m-3'>
            <Col md={6} >
            <img src={vr} className='w-100 '></img>
            </Col>
            <Col md={6}>
            <div className='text-justify about-line'>
                "360Zen Virtual Tours offers immersive experiences that are fully compatible with VR headsets,
                allowing you to explore stunning locations in a truly interactive way. 
                Whether you're touring real estate, visiting tourist destinations, or exploring educational environments, 
                our virtual tours provide a 360-degree view that places you right in the middle of the action. 
                With intuitive controls and high-quality visuals, 360Zen ensures an engaging and seamless virtual 
                experience, making it easy to explore every detail as if you're physically there."
            </div> 
            <Button variant="outline-warning" className='btn-lg rounded-5 mt-5'>Explore  <i class="bi bi-arrow-up-right"></i></Button>
            </Col>
        </Row>
        </div>
    </section>
  );
}
export default App;
