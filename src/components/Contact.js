import React from 'react'
import { Form } from 'react-bootstrap'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="section-title">
                            <span>Contact Us</span>
                            <h2>Stay Connected</h2>
                            <p>Phasellus seiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                    <div className="col-md-6 offset-col-md-1">
                        <div className="contact__inner">
                            <Form>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <Form.Control type="text" placeholder='YourName' />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <Form.Control type="email" placeholder='Your Email' />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <Form.Control type="text" placeholder='Your Phone' />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <Form.Control type="text" placeholder='Subject' />
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Write Your Message"
                                            style={{ height: '100px' }}
                                        />
                                    </div>
                                    <div className='col-md-6'><button className="btn">submit</button></div>
                                </div>

                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact