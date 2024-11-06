// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// import './Customers.css';

// const Customers = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="customers-container">
//       {/* Custom Arrow Buttons with refs */}
//       <div className="swiper-button-prev" ref={prevRef}>
//         <FontAwesomeIcon icon={faArrowLeft} />
//       </div>
//       <div className="swiper-button-next" ref={nextRef}>
//         <FontAwesomeIcon icon={faArrowRight} />
//       </div>

//       <Swiper
//         modules={[Pagination]}
//         pagination={{ clickable: true }}
//         spaceBetween={20}
//         slidesPerView={3}
//         centeredSlides={true}
//         loop={true}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         onSwiper={(swiper) => {
//           // Check if navigation is defined
//           if (swiper.navigation) {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;

//             // Use setTimeout to ensure navigation is set
//             setTimeout(() => {
//               swiper.navigation.init();
//               swiper.navigation.update();
//             });
//           }
//         }}
//       >
//         {[
//           { name: 'Marko Westin', title: 'Co-Founder' },
//           { name: 'Marko Westin', title: 'Co-Founder' },
//           { name: 'Marko Westin', title: 'Co-Founder' },
//           { name: 'Marko Westin', title: 'Co-Founder' },
//         ].map((customer, index) => (
//           <SwiperSlide key={index}>
//             <div className={`swiper-card ${index === activeIndex ? 'active-card' : ''}`}>
//               <FontAwesomeIcon icon={faThumbsUp} className={`thumbs-up ${index === activeIndex ? 'highlight' : ''}`} />
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
//                 voluptatibus soluta corporis tempora obcaecati assumenda cumque
//                 commodi labore sit hic.
//               </p>
//               <h3>{customer.name}</h3>
//               <h4>{customer.title}</h4>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Customers;

import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules'; // Ensure Navigation is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './Customers.css';

const Customers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update navigation buttons when Swiper is initialized
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      // The Swiper instance must be available here
      prevRef.current.style.display = "block";  // Ensure display is set to block
      nextRef.current.style.display = "block";  // Ensure display is set to block
    }
  },[prevRef,nextRef]);

  return (
    <div className="customers-container">
      {/* Custom Arrow Buttons with refs */}
      <div className="swiper-button-prev" ref={prevRef} >
        <FontAwesomeIcon icon={faArrowLeft} className='icon' />
      </div>
      <div className="swiper-button-next" ref={nextRef} >
        <FontAwesomeIcon icon={faArrowRight}  className='icon'/>
      </div>
<h1>Our Client SAY'S</h1>
      <Swiper
        modules={[Pagination, Navigation]} // Include Navigation module
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          // Make sure navigation is initialized properly
          if (swiper.navigation) {
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        {[
          { name: 'Marko Westin', title: 'Co-Founder' },
          { name: 'Marko Westin', title: 'Co-Founder' },
          { name: 'Marko Westin', title: 'Co-Founder' },
          { name: 'Marko Westin', title: 'Co-Founder' },
        ].map((customer, index) => (
          <SwiperSlide key={index}>
            
            <div className={`swiper-card ${index === activeIndex ? 'active-card' : ''}`}>
              <FontAwesomeIcon icon={faThumbsUp} className={`thumbs-up ${index === activeIndex ? 'highlight' : ''}`} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                voluptatibus soluta corporis tempora obcaecati assumenda cumque
                commodi labore sit hic.
              </p>
              <h3 className={`head ${index === activeIndex ? 'highlight' : ''}`}>{customer.name}</h3>
              <h4 className={`name ${index === activeIndex ? 'highlight' : ''}`}>{customer.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Customers;