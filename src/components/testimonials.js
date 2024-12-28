import { Col, Row } from "react-bootstrap";
import avhomestay1 from '../images/avhomestay.jpeg'
import line from '../images/Line 15.png'
import testimonials_bg from '../images/testmonial_bg.png'
import Slider from "react-slick";
function Testimonial(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const testimonials =[{
        photo:avhomestay1,
        message:`“Working with 360Zen has been a game-changer for our hotel. 
                    The 360 virtual tour they created has given potential guests a true sense of our space, 
                    making it easier for them to choose us. Since implementing the tour on our website, 
                    we’ve seen a noticeable increase in bookings. 
                    Guests often mention how much they appreciate being able to explore our hotel virtually 
                    before they arrive. 
                    360Zen’s attention to detail and commitment to quality have made all the difference.
                    We highly recommend their services to any business looking to elevate their online presence.”`,
        name:"AV Home Stay, Pondicherry",
    },{
        photo:avhomestay1,
        message:`“Working with 360Zen has been a game-changer for our hotel. 
                    The 360 virtual tour they created has given potential guests a true sense of our space, 
                    making it easier for them to choose us. Since implementing the tour on our website, 
                    we’ve seen a noticeable increase in bookings. 
                    Guests often mention how much they appreciate being able to explore our hotel virtually 
                    before they arrive. 
                    360Zen’s attention to detail and commitment to quality have made all the difference.
                    We highly recommend their services to any business looking to elevate their online presence.”`,
        name:"AV Home Stay, Pondicherry",
    }]

 return (
    <>
    <section className="" id='testimonals' style={{backgroundImage:`url(${testimonials_bg})`,}}>
        <div className="p-5 text-align-center" style={{"background-color": "rgb(54 52 52 / 70%)"}}>
        <div className="div-center">
            <h4 className="text-light">TESTIMONIALS</h4>
            
        </div>
        <div className="div-center">
        <h1 className="text-light subheading-font">What Our Clients Says?</h1>
        </div>
        <Row className="mt-3">
            <Slider {...settings}>
            {testimonials.map((d) => (
            <Col  md={12} className="justify-content-center ">
                <div className="testmonial-text">
                    <div className="mt-3 mb-3">
                    <p className="text-justify-center text-light">{d.message}</p>
                    <h5 className="float-end text-light">— {d.name}</h5>
                    </div>
                    </div>
                </Col>
            ))}
           </Slider>
        </Row>
        </div>
    </section>
    </>
 );
}

export default Testimonial;