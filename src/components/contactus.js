import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Col, FormControl, NavbarText, Row } from 'react-bootstrap';
import line from '../images/Line 15.png'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import * as AWS from 'aws-sdk'
function ContactUs() {
    AWS.config.update({
        region:process.env.REACT_APP_AWS_REGION,
        credentials:{
            accessKeyId:process.env.REACT_APP_AWS_ACCESSID,
            secretAccessKey:process.env.REACT_APP_AWS_SECERTACCESS
        }
    })
    const ses = new AWS.SES({
        region:process.env.REACT_APP_AWS_REGION,
        smtp:{
            host:process.env.REACT_APP_SMTP_HOST,
            port:process.env.REACT_APP_SMTP_PORT,
            auth:{
                user:process.env.REACT_APP_SMTP_USER,
                pass:process.env.REACT_APP_SMTP_PASS
            },
        },
    })

    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [response, setResponse] = React.useState('')
    const [show, setShow] = React.useState(true);

    const handleSubmit= (e) => {
        e.preventDefault();
        const FormData = {name, phone,email, message}
        const confirmationparams={
            Source:"",/* from the aws source*/
            Destination:{
                ToAddresses:[]
            },
            Message:{
                Subject:{
                    Data:`${name} Tried Contacting You via Website`
                },
                Body:{
                    Text:{
                        Data:`
                        Name: ${name} 
                        Phone: ${phone}
                        Email:${email}
                        message:${message}`
                    }
                }
            } 
        };
        setResponse("We Recieved Your Message will get in touch soon ")
        // const sentEmail = ses.sendEmail(confirmationparams).promise();
        // sentEmail.then((data)=> setResponse("We Recieved Your Message will get in touch soon ")).catch((err) => setResponse(err))
        setName("")
        setPhone("")
        setEmail("")
        setMessage("")
    }
  
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
            <form onSubmit={handleSubmit}>
                <Row className='mt-3'>
                
                    <Col md={6}>
                   
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Name"
                        required
                        />
                        <label htmlFor="floatingInputCustom">Name</label>
                    </Form.Floating>
                    <Form.Floating className='mb-3'>
                        <Form.Control
                        id="phone"
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        required
                        />
                        <label htmlFor="floatingPasswordCustom">Phone Number</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                        />
                        <label htmlFor="floatingInputCustom">Email address</label>
                        </Form.Floating>
                    <FloatingLabel controlId="floatingTextarea2" label="Leave a message here">
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a message here"
                        style={{ height: '100px' }}
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        required
                        />
                    </FloatingLabel>
                        <Button type="submit" variant="outline-warning" size="lg" className='mt-2 mb-2 rounded-5'>
                        Submit
                        </Button>
                        {response && <Alert variant="success" onClose={() => setShow(false)} dismissible>{response}</Alert>}    
                    </Col>
                    
                    <Col md={6} className='mt-5'>
                        {/* <img className='w-50' src={hotelbed} style={{transform:"rotate(15.5deg)"}}></img>
                        <img className='w-50' src={budha} style={{marginLeft:"-70px",position:"relative"}}></img> */}
                    </Col>
                </Row>
            </form>
       </div>
    </section>
  );
}
export default ContactUs;
