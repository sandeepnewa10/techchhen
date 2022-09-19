import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Photo from '../assets/about.jpg';
const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <div className="col-md-7"> <img src={Photo} alt="feature" className='img-fluid' /></div>
                    <div className="col-md-5">
                        <div className="about__inner">
                            <div className="section-title">
                                <span>About Us</span>
                                <h2>We Innovate Digital Goods</h2>
                            </div>
                            <ul className="about__inner-content">
                                <li>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur obcaecati possimus doloribus. Sint soluta error, veritatis incidunt nesciunt, eveniet maiores, deserunt nisi vero nam quae! Quis itaque molestiae maiores vitae?</p>
                                </li>
                                <li>
                                    <p>Iste illo beatae explicabo, quae laudantium laborum quo asperiores sit tempora recusandae natus, corporis vel neque ipsam doloribus quidem accusamus repudiandae itaque fugiat sequi! Maiores labore vitae nostrum atque recusandae?</p>
                                </li>
                            </ul>
                            <a href="/" className="btn">Read More</a>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default About