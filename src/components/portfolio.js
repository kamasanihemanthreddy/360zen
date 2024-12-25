import { Col, Row } from "react-bootstrap";
import React,{ useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import gallery_1 from '../images/gallery_1.png'
import gallery_2 from '../images/gallery_2.png'
import gallery_3 from '../images/gallery_3.png'
import gallery_4 from '../images/gallery_4.png'
import gallery_5 from '../images/gallery_5.png'
import gallery_6 from '../images/gallery_6.png'
import gallery_7 from '../images/gallery_7.png'
import gallery_8 from '../images/gallery_8.png'

const all =[gallery_1,gallery_2,gallery_3,gallery_4,gallery_5,gallery_6,gallery_7,gallery_8]
const hotel =[gallery_3,gallery_5,gallery_6]
const realestate =[gallery_2,gallery_4]
const resturents =[gallery_7,gallery_8]
function Portfolio(){
        const [show, setShow] = useState(false); 
        const [selectedImage, setSelectedImage] = useState(''); 
        const handleClose = () => setShow(false); 
        const handleShow = (image) => { setSelectedImage(image); setShow(true);  };

    return (
        <>
        <section id='portfolio'>
            <div className="p-5">
                <Row className="mb-2">
                <Col md={12}>
                    <span className='custom-font'>Portfolio</span>
                    <span className='subheading-font' style={{display:"inherit"}}> Recent Works</span>
                    
                </Col>
                
            </Row>
                <Tabs  defaultActiveKey="home"
                    id="justify-tab-example"
                    className="mb-3 justify-content-center custom-nav-tabs gallery-item"
                    >
                    <Tab eventKey="home" title="All" >
                        <Row className="flex col-12 ">
                        {all.map((image, index) => (
                            <Col md={3} className="mb-1 gallery-item ">
                                <img src={image} alt="image_{index}" onClick={() => handleShow(image)}/>
                            </Col>
                        ))}
                        </Row>
                    </Tab>
                    <Tab eventKey="hotel" title="Hotel">
                    <Row className="flex col-12 ">
                        {hotel.map((image, index) => (
                            <Col md={3} className="mb-1 gallery-item ">
                                <img src={image} alt="image_{index}" onClick={() => handleShow(image)}/>
                            </Col>
                        ))}
                        </Row>
                    </Tab>
                    <Tab eventKey="Realestate" title="Real Estate" >
                    <Row className="flex col-12 ">
                        {realestate.map((image, index) => (
                            <Col md={3} className="mb-1 gallery-item ">
                                <img src={image} alt="image_{index}" onClick={() => handleShow(image)}/>
                            </Col>
                        ))}
                        </Row>
                    </Tab>
                    <Tab eventKey="Resturents" title="Restaurants" >
                    <Row className="flex col-12 ">
                        {resturents.map((image, index) => (
                            <Col md={3} className="mb-1 gallery-item ">
                                <img src={image} alt="image_{index}" onClick={() => handleShow(image)}/>
                            </Col>
                        ))}
                        </Row>
                    </Tab>
                </Tabs>
            </div>
        </section>
        </>
)}

export default Portfolio;

