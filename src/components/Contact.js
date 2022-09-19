import React from 'react'
import ContactForm from './ContactForm'
import { Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container>
                <Row>
                    <div className="col-md-5">
                        <div className="section-title">
                            <span>Contact Us</span>
                            <h2>Stay Connected</h2>
                            <p>Phasellus seiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                    <div className="col-md-6 offset-col-md-1">
                        <div className="contact__inner">
                          <ContactForm/>

                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Contact