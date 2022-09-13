import React from 'react'
import Photo from '../assets/image1.jpg';
const Service = () => {
    return (
        <section className="service">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="service__inner">
                            <div className="section-title">
                                <h2>Service</h2>
                                <span>Industry Standard Service</span>
                            </div>
                            <ul className='service-list'>
                                <li>
                                    <div className="service-item">
                                        <div className="icon">Icon</div>
                                        <div className="service-info">
                                            <h3>Web Solutions</h3>
                                            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, similique.</span>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <div className="icon">Icon</div>
                                        <div className="service-info">
                                            <h3>Mobile Application</h3>
                                            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, similique.</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="service-item">
                                        <div className="icon">Icon</div>
                                        <div className="service-info">
                                            <h3>Digital Marketing</h3>
                                            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, similique.</span>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <div className="icon">Icon</div>
                                        <div className="service-info">
                                            <h3>Consultancy</h3>
                                            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, similique.</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="service__image">
                            <img src={Photo} className="img-fluid" alt="service" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service