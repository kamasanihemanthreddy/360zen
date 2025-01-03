import { Col, Row,Modal } from "react-bootstrap";
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
import Slider from "react-slick";

const all =[gallery_1,gallery_2,gallery_3,gallery_4,gallery_5,gallery_6,gallery_7,gallery_8]
const hotel =[gallery_3,gallery_5,gallery_6]
const realestate =[gallery_2,gallery_4]
const resturents =[gallery_7,gallery_8]

const images = [
    { src: gallery_1, size: 'big', text:"AV HomeStay,", address:"Pondicherry, India", image_name:"Hotel" },
    { src: gallery_3, size: 'small', text:"Casa Grande, ",address:"Mumbai, India", image_name:"Real Estate"},
    { src: gallery_4, size: 'small', text:"Le Coramandel, ",address:"Pondicherry, India", image_name:"Restaurant"},
    { src: gallery_2, size: 'small', text:"Taj Hotel, ",address:"Mumbai, India", image_name:"Hotel" },
    { src: gallery_5, size: 'small', text:"AV HomeStay",address:"Pondicherry, India", image_name:"Hotel"},
    { src: gallery_4, size: 'small', text:"AV HomeStay",address:"Pondicherry, India", image_name:"Hotel"},
    // Add more image objects as needed
];


// function Portfolio(){
//         const [show, setShow] = useState(false); 
//         const [selectedImage, setSelectedImage] = useState(''); 
//         const handleClose = () => setShow(false); 
//         const handleShow = (image) => { setSelectedImage(image); setShow(true);  };
        
//     return (
//         <>
//         <section id='portfolio'>
//             <div className="p-5">
//                 {/* <Row className="mb-2">
//                 <Col md={12}>
//                     <span className='custom-font'>Portfolio</span>
//                     <span className='subheading-font' style={{display:"inherit"}}> Recent Works</span>
                    
//                 </Col>
                
//             </Row>
//                 <Tabs  defaultActiveKey="home"
//                     id="justify-tab-example"
//                     className="mb-3 justify-content-center custom-nav-tabs "
//                     >
//                     <Tab eventKey="home" title="All" >
//                         <Row className=" gallery-grid gallery-container gallery-item">
//                             {all.map((image, index) => (
//                             <Col md={3} className="mb-1 gallery-item ">
//                                 <img src={image} alt="image_{index}" onClick={() => handleShow(image)}/>
//                             </Col>
//                         ))}
//                             </Row>
//                     </Tab>
//                     <Tab eventKey="hotel" title="Hotel">
//                     <Row className="flex col-12 gallery-grid gallery-container gallery-item">
//                         {hotel.map((image, index) => (
//                             <Col md={3} className="mb-1 gallery-item ">
//                                 <img src={image} alt="image_{index}" onClick={() => handleShow(image)}/>
//                             </Col>
//                         ))}
//                         </Row>
//                     </Tab>
//                     <Tab eventKey="Realestate" title="Real Estate" >
//                     <Row className="flex col-12 gallery-grid gallery-container gallery-item">
//                         {realestate.map((image, index) => (
//                             <Col md={3} className="mb-1 gallery-item ">
//                                 <img src={image} alt="image_{index}" onClick={() => handleShow(image)}/>
//                             </Col>
//                         ))}
//                         </Row>
//                     </Tab>
//                     <Tab eventKey="Resturents" title="Restaurants" >
//                     <Row className="flex col-12 gallery-grid gallery-container gallery-item">
//                         {resturents.map((image, index) => (
//                             <Col md={3} className="mb-1 gallery-item ">
//                                 <img src={image} alt="image_{index}" onClick={() => handleShow(image)}/>
//                             </Col>
//                         ))}
//                         </Row>
//                     </Tab>
//                 </Tabs> */}
//             </div>
//             <div className="p-3">

//             </div>
//         </section>
//         </>
// )}


function Portfolio(){
    const [show, setShow] = useState(false); 
    const [selectedImage, setSelectedImage] = useState(''); 
    const handleClose = () => setShow(false); 
    const handleShow = (image) => { setSelectedImage(image.src); setShow(true); }; 
    return ( 
       <>
       <section >
        <div className="p-5">
        <Row>
       <Col md={12}>
       <span className='custom-font'>Portfolio</span><span className='subheading-font'> Recent Works</span>
       </Col>
       </Row>
        <div className="portfolio-container mt-4"> 
        <div className="portfolio-grid"> 
            {images.map((image, index) => ( 
                <div 
                    className={`portfolio-item ${image.size}`} 
                    key={index} onClick={() => 
                    handleShow(image)} >
                     <img src={image.src} alt={`Gallery ${index}`} className="img-fluid" /> 
                     <div className="image-text">
                        {image.image_name} 
                     </div>
                     <div className="title-text">
                        {image.text} <span style={{"font-size":"smaller","font-weight":"400"}}>{image.address}</span>
                     </div>
                      </div> 
            ))} </div> 
            <Modal show={show} onHide={handleClose} centered size="lg"> 
                <Modal.Body className="p-0"> 
                    <img src={selectedImage} alt="Full Screen" className="img-fluid w-100" /> 
                </Modal.Body> 
                </Modal> 
            </div> 
        </div>
       </section>
            </>); 
}

export default Portfolio;

