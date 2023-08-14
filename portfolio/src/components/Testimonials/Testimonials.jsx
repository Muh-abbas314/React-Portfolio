import './Testimonials.css'
import av1 from '../../assets/avatar1.jpg'
import av2 from '../../assets/avatar2.jpg'
import av3 from '../../assets/avatar3.jpg'
import av4 from '../../assets/avatar4.jpg'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 


export default function Testimonials(){
 
    const avatars=[av1,av2,av3,av4]
    const DispElements=avatars.map(item=>{
        return(<SwiperSlide key={item} className='testimonial'>
        <div className='client__avatar'>
            <img src={item}/>
        </div>
            <h5 className='client__name'>Ernest achiever</h5>
            <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sint sequi numquam. Labore.
                
            </small>
        
    </SwiperSlide>)
    }
    )
 
 return(<section id="testimonials">
    <div className='spacing'>

    </div>
    <h5>Review From Clients</h5>
    <h2>Testimonials</h2>

    <Swiper className='container testimonials__container'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={1}
      pagination={{ clickable: true }}
     >
    {DispElements}
    </Swiper>
    </section>)
}