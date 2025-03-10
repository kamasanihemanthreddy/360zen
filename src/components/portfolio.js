import { Col, Row,Modal } from "react-bootstrap";
import React,{ useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import gallery_1 from '../images/AvHomestay_rEC.jpg'
import gallery_2 from '../images/img-1.jpg'
import gallery_3 from '../images/img-2.jpg'
import gallery_4 from '../images/img-3.jpg'
import gallery_5 from '../images/img-4.jpg'
import gallery_6 from '../images/img-5.jpg'
// import gallery_7 from '../images/gallery_7.png'
// import gallery_8 from '../images/gallery_8.png'
import Slider from "react-slick";


const images = [
    { src: gallery_1, size: 'big', text:"AV HomeStay,", address:"Pondicherry, India", image_name:"Hotel", website:"https://360zen.s3.ap-south-1.amazonaws.com/AV_Home_Stay/index.htm"},
    { src: gallery_2, size: 'small', text:"",address:"", image_name:"Real Estate", website:"#portfolio"},
    { src: gallery_3, size: 'small', text:"",address:"", image_name:"Restaurant", website:"#portfolio"},
    { src: gallery_4, size: 'small', text:"",address:"", image_name:"Hotel", website:"#portfolio" },
    { src: gallery_5, size: 'small', text:"",address:"", image_name:"Hotel", website:"#portfolio"},
    { src: gallery_6, size: 'small', text:"",address:"", image_name:"Hotel", website:"#portfolio"},
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
       <section style={{"backgroundColor":"#F4F4F4"}} id="portfolio">
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
                     <a href={image.website}><img src={image.src} alt={`Gallery ${index}`} className="img-fluid" /> </a>
                     <div className="image-text">
                        {image.image_name} 
                     </div>
                     <div className="title-text">
                        {image.text} <span style={{"font-size":"smaller","font-weight":"400"}}>{image.address}</span>
                     </div>
                      </div> 
                    ))} 
            </div>
            {/* <Modal show={show} onHide={handleClose} centered size="lg"> 
                <Modal.Body className="p-0"> 
                    <img src={selectedImage} alt="Full Screen" className="img-fluid w-100" /> 
                </Modal.Body> 
                </Modal>  */}
            </div> 
        </div>
       </section>
            </>); 
}

export default Portfolio;

