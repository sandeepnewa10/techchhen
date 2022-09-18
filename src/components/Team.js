import React from 'react'
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/model1.jpg';
import image4 from '../assets/model11.jpg';

const Team = () => {
  return (
    <section className="team" id="team">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <div className="section-title">
                                <span>Team Members</span>
                                <h2>Amazing Team</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae exercitationem reiciendis dolorem natus magnam sed quod impedit et soluta delectus.</p>
                            </div>
                </div>
                <div className="col-md-8">
                <div className="row">
                <div className="col-md-3">
                    <img src={image1} alt="fasfs" className='img-fluid' />
                </div>
                <div className="col-md-3"><img src={image2} alt="fasfs" className='img-fluid' /></div>
                <div className="col-md-3"><img src={image3} alt="fasfs" className='img-fluid' /></div>
                <div className="col-md-3"><img src={image4} alt="fasfs" className='img-fluid' /></div>
                </div>
                </div>

                
                
            </div>
        </div>
    </section>
  )
}

export default Team