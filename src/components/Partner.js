import React from 'react'
import Brand1 from '../assets/brand-img1.png';
import Brand2 from '../assets/brand-img2.png';
import Brand3 from '../assets/brand-img3.png';
import Brand4 from '../assets/brand-img4.png';
import Brand5 from '../assets/brand-img5.png';
import Brand6 from '../assets/brand-img6.png';
import Brand7 from '../assets/brand-img7.png';
import Brand8 from '../assets/brand-img8.png';
import Brand9 from '../assets/brand-img9.png';


const Partner = () => {
  return (
    <section className="partner" id="partner">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                <div className="section-title">
                        <span>Partners</span>
                        <h2>Trusted By Brands</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident optio, commodi amet dignissimos temporibus illo, nisi saepe hic mollitia quos incidunt porro! Minima voluptatem sint voluptatum eum ab facilis eius!</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 mb-5"><img src={Brand1} alt="Brand" className='img-fluid' /></div>
                        <div className="col-sm-4 col-md-4  mb-5"><img src={Brand2} alt="Brand" className='img-fluid' /></div>
                        <div className="col-sm-4 col-md-4  mb-5"><img src={Brand3} alt="Brand" className='img-fluid' /></div>
                        <div className="col-sm-4 col-md-4  mb-5"><img src={Brand4} alt="Brand" className='img-fluid' /></div>
                        <div className="col-sm-4 col-md-4  mb-5"><img src={Brand5} alt="Brand" className='img-fluid' /></div>
                        <div className="col-sm-4 col-md-4  mb-5"><img src={Brand6} alt="Brand" className='img-fluid' /></div>
                        <div className="col-sm-4 col-md-4  mb-5"><img src={Brand7} alt="Brand" className='img-fluid' /></div>
                        <div className="col-sm-4 col-md-4  mb-5"><img src={Brand8} alt="Brand" className='img-fluid' /></div>
                        <div className="col-sm-4 col-md-4  mb-5"><img src={Brand9} alt="Brand" className='img-fluid' /></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Partner