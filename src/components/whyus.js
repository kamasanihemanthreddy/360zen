import React, { useState } from 'react';
import { Col, Row,Modal } from "react-bootstrap";

const whyus = [
    {classname:"bi bi-badge-vr", title:"Expertise in Immersive Technology",text:"With years of experience in 360-degree photography, videography, and interactive virtual environments, we deliver tours that captivate and engage. Our team uses cutting-edge technology to ensure every detail is crystal clear."},
    {classname:"bi bi-person-gear", title:"Custom-Tailored Solutions",text:"No two spaces are the same, and neither are our virtual tours. Whether you're showcasing a real estate property, a hotel, a museum, or a retail store, we tailor our services to meet your unique needs and brand identity."},
    {classname:"bi bi-headset-vr", title:"Enhanced User Experience",text:"We focus on designing tours that are not only visually stunning but also easy to navigate. Features like interactive hotspots, guided walkthroughs, and VR compatibility make our tours intuitive and accessible."},
    {classname:"bi bi-bar-chart", title:"Boost Your Online Presence",text:"Our virtual tours are optimized to increase engagement and conversions. From higher website traffic to improved SEO rankings, our tours help your business stand out in a competitive market."},
    {classname:"bi bi-layers", title:"Seamless Integration",text:"We ensure our virtual tours integrate seamlessly with your existing digital platforms. Whether it’s embedding on your website, sharing on social media, or incorporating into your marketing campaigns, we make it effortless."},
    {classname:"bi bi-star", title:"Affordable Excellence",text:"At 360Zen, we believe premium quality doesn’t have to come at a premium price. Our competitive pricing ensures you get exceptional value for your investment."},
    {classname:"bi bi-headset", title:"Dedicated Support",text:"From the initial consultation to the final delivery, our team is with you every step of the way. Need updates or additional features later? We’re always here to help."}
]

const WhyUs = () => { 
    return (
        <>
            <section id="whywe" style={{"backgroundColor":"#80808040"}}>
                <div className='p-5'>
                    <Row>
                        <Col>
                        <span className='custom-font'>Why</span><span className='subheading-font'> Choose Us ?</span>
                        </Col>
                    </Row>
                    <Row style={{"backgroundColor":"white","border-radius":"20px"}}>
                    {whyus.map((content, index) => ( 
                        <Col md={3}>
                        <div class="card mt-2" style={{"border":"none"}}>
                            <div class="card-body">
                                <h5 class="card-title" ><i className= {`custom-card-title ${content.classname}`}></i></h5>
                                <h6 class="card-subtitle mb-2 ">{content.title}</h6>
                                <p class="card-text " style={{"text-align":"justify"}}>{content.text}</p>
                                {/* <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a> */}
                            </div>
                            </div> 
                        </Col>
                    ))}
                    </Row>
                </div>
            </section>
        </>
    );

};
export default WhyUs;
