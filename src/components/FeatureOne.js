import React from 'react'
import Photo from '../assets/feature-img.png';
const FeatureOne = () => {
    return (
        <section className="featureOne">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="featureOne__image">
                            <img src={Photo} alt="feature" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="featureOne__inner">
                            <div className="section-title">
                                <span>Why Choose Us</span>
                                <h2>Never compromise with Quality</h2>
                            </div>
                            <ul className="featureOne">
                                 <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium adipisci aliquid sunt, consequuntur assumenda ab.</li>
                                <li>Dunt ut labore et dolore ma gna aliquaim ad minim vul koreo amare ki mone pore na ami todiba.</li>
                                <li>Praesent mattis, orci in vulputate ultrices, turpis ipsum imp erdiet nibh, in porta lectus diam non nis.</li>
                                <li>Vamus ut massa non felis fermentum convallis at ac urna. Sed vitae purus soda</li>                                
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium adipisci aliquid sunt, consequuntur assumenda ab.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureOne