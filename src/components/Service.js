import React from 'react'
import Photo from '../assets/image1.jpg';
import { FaCalendarAlt, FaPencilAlt, FaHubspot, FaDiceD6 } from "react-icons/fa"

const Service = () => {
    return (
        <section className="service">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="service__inner">
                            <div className="section-title">
                                <span>Service</span>
                                <h2>Industry Standard Service</h2>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="service-item">
                                    <div className="icon"><FaCalendarAlt /></div>
                                    <div className="service-info">
                                        <h3>Web Solutions</h3>
                                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, similique.</span>
                                    </div>
                                </div></div>
                                <div className="col-sm-12 col-md-6">
                                     <div className="service-item">
                                    <div className="icon"><FaPencilAlt /></div>
                                    <div className="service-info">
                                        <h3>Mobile Application</h3>
                                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, similique.</span>
                                    </div>
                                </div></div>
                                <div className="col-sm-12 col-md-6">
                                     <div className="service-item">
                                    <div className="icon"><FaHubspot /></div>
                                    <div className="service-info">
                                        <h3>Digital Marketing</h3>
                                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, similique.</span>
                                    </div>
                                </div></div>
                                <div className="col-sm-12 col-md-6">
                                      <div className="service-item">
                                    <div className="icon"><FaDiceD6 /></div>
                                    <div className="service-info">
                                        <h3>Consultancy</h3>
                                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, similique.</span>
                                    </div>
                                </div></div>
                            </div>
                            {/* <ul className='service-list'>
                                <li>
                                    
                                   
                                </li>
                                <li>
                                   
                                  
                                </li>
                            </ul> */}
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