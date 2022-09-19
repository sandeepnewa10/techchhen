import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { EffectFade } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

import { slider } from '../data/Data'

const Slider = () => {

    return (
        <>
          
            <section className="slider" id="home">
                <Swiper
                    navigation={true}
                    modules={[Pagination, Navigation, EffectFade]}
                    className="swiper"
                    effect="fade" 
                    autoplay= {{
                            delay: 3000,                     
                            disableOnInteraction: false
                          }}
                > 
                    {slider.map((list, index) => (
                        <SwiperSlide>
                            <img src={list.image} alt="Techchhen" />
                            <div className="image-caption">
                                <div class="container">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-8 col-lg-6">                                            
                                            <div className="slider-title"><h2>{list.title}</h2>
                                            <span>{list.subtitle}</span></div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                

                </Swiper>
            </section>


        </>
    )
}

export default Slider