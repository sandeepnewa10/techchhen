import React from 'react'
import Photo from '../assets/pic3.jpg';
const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-5"> <img src={Photo} alt="feature" className='img-fluid' /></div>
                    <div className="col-md-7">
                        <div className="about__inner">
                            <div className="section-title">
                                <h2>About Us</h2>
                                <span>We Innovate Digital Goods</span>
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
                </div>
            </div>
        </section>
    )
}

export default About