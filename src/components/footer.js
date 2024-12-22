import * as React from 'react';
import vr from '../images/vr.png'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
                        <i class="bi bi-instagram h1"></i>
                        <i class="bi bi-facebook h1" style={{paddingRight:"25px"}}></i>
                        <i></i>
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
