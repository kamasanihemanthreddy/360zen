import * as React from 'react';
import { Col, NavbarText, Row } from 'react-bootstrap';
import logo from '../images/360zen.png'
import line from '../images/Line 15.png'

function Footer() {
  
  return (
    <section className='' style={{"backgroundColor":"#761616"}} id='footer'>
        <div className='p-5'>
           <Row>
                <Col md={3}>
                <img src={logo} className='w-100' style={{"max-width":"300px"}}></img>
                </Col>
                <Col md={8} className='float-end text-light'>
                <div className='footer-contact'>
                    <h5>Follow</h5>
                    <img src={line}></img>
                    <div className='d-flex gap-3'>
                        <a className='text-white' href="https://www.instagram.com/360_zen/" target='_blank'><i class="bi bi-instagram h1"></i></a>
                        <a className='text-white' href="https://www.facebook.com/profile.php?id=61566455641451" target='_blank'><i class="bi bi-facebook h1" ></i></a>
                        <a className='text-white' href="https://www.linkedin.com/company/360zen/?viewAsMember=true" target='_blank'><i class="bi bi-linkedin h1" ></i></a>
                        <a className='text-white' href="https://wa.me/+919994860154" target='_blank'><i class="bi bi-whatsapp h1"></i></a>
                    </div>
                    <p>{(new Date().getFullYear())} - 360Zen All Right Reserved</p>
                </div>
                </Col>
           </Row>
       </div>
    </section>
  );
}
export default Footer;
