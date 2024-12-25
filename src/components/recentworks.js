import { Col, Row } from "react-bootstrap";
import avhomestay1 from '../images/avhomestay.jpeg'
import line from '../images/Line 15.png'
import Slider from "react-slick";
function RecentWorks(){
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
    <section className="" id='recentworks' >
        <div className="p-5">
        <Row>
            <Col md={8}>
                <span className='custom-font'>Portfolio</span><span className='subheading-font'> Testimonial</span><img src={line}></img>
                
            </Col>
            {/* <Col md={4}>
            <Button variant="outline-warning" className='float-end btn-lg rounded-5 mt-5'>Explore More <i class="bi bi-arrow-up-right"></i></Button>
            </Col> */}
        </Row>
        <Row className="mt-3">
            <Slider {...settings}>
            {testimonials.map((d) => (
            <Col  md={12} className="justify-content-center">
                <div className="justify-content-center div-center">
                    <img className="rounded-circle " src={d.photo}  style={{"height":"100px"}}></img>
                </div>
                    <div className="mt-3 mb-3">
                    <p className="text-justify-center ">{d.message}</p>
                    </div>
                    <p className="float-end">— {d.name}</p>
                </Col>
            ))}
           </Slider>
        </Row>
        
        </div>
    </section>
    </>
 );
}

export default RecentWorks;