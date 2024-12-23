import { Col, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import bedroomimg from '../images/doublebedroom.jpeg'
import villhall from '../images/villahall.jpeg'
import hometheater from '../images/hometheater.jpeg'
import line from '../images/Line 15.png'
import React,{ useState } from "react";
import Slider from "react-slick";
const data =[{
    title:"01. Hotels Virtual Tours ",
    image:bedroomimg,
    content:"Showcase your hotel's luxury and ambiance like never before. With our cutting-edge 360-degree virtual tours, your potential guests can experience a detailed walkthrough of your property from anywhere in the world."
},{
    title:"02. Real Estate Virtual Tours",
    image:villhall,
    content:"Stand out in the real estate market with engaging, interactive virtual tours. Whether you're showcasing residential or commercial properties, our virtual tours allow potential buyers or tenants to explore every corner of the property at their convenience."
},{
    title:"03.Restaurant/Venue Virtual Tour",
    image:hometheater,
    content:"Attract diners or event planners with an immersive, interactive preview of your restaurant or venue. By our 360-degree virtual tours."
},{
  title:"04.Custom Virtual Tour Solutions",
  image:bedroomimg,
  content:"Every business is unique and so are it needs. we offer custom virtual tour solutions tailored to your specific industry and "
}]


const ReadMore = ({ children }) => {
  const text = children[1];
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
  };
  return (<>
          {isReadMore ? text.slice(0, 120) : text}
          <span
              onClick={toggleReadMore}
              className="read-or-hide"
              style={{ color: "#ffa500" }}
          >
              {isReadMore ? "...Read More" : " Show Less"}
          </span>
          </>
  );
};

function WeOffer(){
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
        <section id="weoffer">
            <div className="p-5">
                <Row>
                    <Col md={3}>
                    <span className='custom-font'>What We</span>
                    <span className='subheading-font' style={{display:"block"}}> Offer</span>
                    <img src={line} className="w-100"></img>
                    <p>
                    We Shoot, Develop and host virtual tours in web server that can be accessible at any where in the world.
                    </p>
                </Col>
                <Col md={9}>
                  <Slider {...settings}>
                  {data.map((d) => (
                  <div>
                      <Card className="m-1">
                        <Card.Img variant="top" src={d.image} />
                          <Card.Body>
                            <Card.Title>{d.title}</Card.Title>
                            <Card.Text>
                            <ReadMore> {d.content} </ReadMore>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </div>
                  ))}
                  </Slider>
                </Col>
                </Row>
            </div>
        </section>
        </>
    );
}


// {data.map((d) => (
//   <div >
//   <Card style={{ width: '18rem' }} className="m-2">
//   <Card.Body>
//   <Card.Title>{d.title}</Card.Title>
//   <Card.Img variant="top" src={d.image} />
//   <Card.Text>
//   {d.content}
//   </Card.Text>
//   </Card.Body>
//   </Card>
//   </div>
// ))}
export default WeOffer;