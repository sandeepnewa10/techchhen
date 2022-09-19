import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Result = () => {
    return (
        <p className='mt-4'>Your message has been successfully sent. We will contact your soon.</p>
    );
};

const ContactForm = (props) => {

    const [result, showResult] = useState(false);
const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_417k916', 'template_2ex48sm', form.current, '9nNSrDBxmkZaOfLPn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
};

  return (
    <Form ref={form}  onSubmit={sendEmail}>
    <div className="row">
        <div className="col-md-6 mb-4">
            <Form.Control type="text" placeholder='YourName' name="fullName" required />
        </div>
        <div className="col-md-6 mb-4">
            <Form.Control type="email" placeholder='Your Email' name="email" required />
        </div>
        <div className="col-md-6 mb-4">
            <Form.Control type="text" placeholder='Your Phone' name="phone" required />
        </div>
        <div className="col-md-6 mb-4">
            <Form.Control type="text" placeholder='Subject' name="subject" required />
        </div>
        <div className="col-md-12 mb-4">
            <Form.Control
                as="textarea"  name="message" required
                placeholder="Write Your Message"
                style={{ height: '100px' }}
            />
        </div>
        <div className='col-md-6'><button className="btn">submit</button></div>
        <div className="row text-center">
            {result ? <Result /> : null }
        </div>
    </div>

</Form>
  )
}

export default ContactForm