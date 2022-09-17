import React from 'react'
import Photo from '../assets/feature2-img.png';
import { FiEdit } from "react-icons/fi"
import { TbReportMedical } from "react-icons/tb"

const FeatureSecond = () => {
    return (
        <section className="featureSecond">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                        <div className="featureOne__image">
                            <img src={Photo} alt="feature" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-5  offset-md-1">
                        <div className="featureSecond__inner">
                            <div className="section-title">
                                <span>Features</span>
                                <h2>Top Features that Keep Us Head</h2>
                            </div>
                            <div className="featureSecond-list">
                                <div className="row mb-3">
                                <div className="col-sm-2 col-md-2"><div className="icon"><TbReportMedical /></div></div>
                                <div className="col-sm-10 col-md-10"><div className="content">
                                    <h4>Developer Friendly Design</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ab reiciendis possimus ea praesentium atque ad ipsa inventore sit corrupti.</p>
                                </div></div>
                                </div>
                                <div className="row">
                                <div className="col-sm-2 col-md-2"><div className="icon"><TbReportMedical /></div></div>
                                <div className="col-sm-10 col-md-10"><div className="content">
                                    <h4>Developer Friendly Design</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ab reiciendis possimus ea praesentium atque ad ipsa inventore sit corrupti.</p>
                                </div></div>
                                </div>

                            </div>
                        </div>
                    </div>
                   

                </div>
            </div>
        </section>
    )
}

export default FeatureSecond