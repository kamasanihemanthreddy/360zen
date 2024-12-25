import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { Col, FormControl, NavbarText, Row } from 'react-bootstrap';
import line from '../images/Line 15.png'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function ContactUs() {
  
  return (
    <section className=''id='contactus'>
        <div className='p-5'>
            <Row>
                <Col md={12} className=''>
                    <span className='custom-font'>Let’s</span><span className='subheading-font'> Talk</span><img src={line}></img>
                </Col>
            </Row>
            <Row>
                <Col md={3} className='p-3'>
                    <div className='d-flex gap-2' style={{fontWeight:"bold",fontSize:"20px"}}>
                        <i className='bi bi-phone-vibrate text-warning' ></i>
                        <label>Phone</label>
                    </div>
                    <a href="" className='font-weight-bold text-decoration-none text-secondary'>+91 99591 50154</a>
                </Col>
                <Col md={3} className='p-3'>
                    <div className='d-flex gap-2' style={{fontWeight:"bold",fontSize:"20px"}}>
                        <i className='bi bi-envelope-at-fill text-warning' ></i>
                        <label>Email</label>
                    
                    </div>
                    <a href="emailto:360zenofficial@gmail.com" className='font-weight-bold text-decoration-none text-secondary'>360zenofficial@gmail.com</a>
                </Col>
                <Col md={3} className='p-3'>
                    <div className='d-flex gap-2' style={{fontWeight:"bold",fontSize:"20px"}}>
                        <i className='bi bi-pin-map text-warning' ></i>
                        <label>Address</label>
                    
                    </div>
                    <a  className='font-weight-bold text-decoration-none text-secondary'>Chennai, Tamilnadu, India</a>
                </Col>
                <Col md={3} className='p-3'>
                    <div className='d-flex gap-2' style={{fontWeight:"bold",fontSize:"20px"}}>
                        <i className='bi bi-instagram text-warning' ></i>
                        <label>Instgram</label>
                    </div>
                    <a href="https://www.instagram.com/360_zen/" target='_blank' className='font-weight-bold text-decoration-none text-secondary'>@360_Zen</a>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col md={6}>
                <Form.Floating className="mb-3">
                    <Form.Control
                    id="name"
                    type="text"
                    placeholder="Name"
                    />
                    <label htmlFor="floatingInputCustom">Name</label>
                </Form.Floating>
                <Form.Floating className='mb-3'>
                    <Form.Control
                    id="phone"
                    type="text"
                    placeholder="Phone"
                    />
                    <label htmlFor="floatingPasswordCustom">Phone Number</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                <FloatingLabel controlId="floatingTextarea2" label="Leave a message here">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a message here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Button variant="outline-warning" size="lg" className='mt-2 rounded-5 float-start'>
                Submit
                </Button>
                </Col>
                <Col md={6} className='mt-5'>
                    {/* <img className='w-50' src={hotelbed} style={{transform:"rotate(15.5deg)"}}></img>
                    <img className='w-50' src={budha} style={{marginLeft:"-70px",position:"relative"}}></img> */}
                </Col>
            </Row>
       </div>
    </section>
  );
}
export default ContactUs;
