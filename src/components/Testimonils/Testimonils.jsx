import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import User from '/images/user.png';

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const reviews = [
    {
      id: 1,
      text: '"Great product! Highly recommend."',
      author: "Jayaraj",
      rating: 5,
    },
    {
      id: 2,
      text: '"Amazing experience, will buy again."',
      author: "Jebaraj",
      rating: 4,
    },
    {
      id: 3,
      text: "Excellent quality and link is accessible immediately.",
      author: "Dinesh",
      rating: 5,
    },
    {
        id: 4,
        text: "Excellent quality and link is accessible immediately.",
        author: "Mark Winson",
        rating: 5,
      },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginTop: "80px", marginBottom: "20px" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "20px", fontSize:'40px' }}>Testimonials</h2>
      <Slider {...settings} style={{ width: "100%", maxWidth: "600px", padding: "20px", boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}>
        {reviews.map((review) => (
          <div
            key={review.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
              margin: "0 auto",
            }}
          >
            <p style={{ color: "#4A4A4A", marginBottom: "16px", textAlign: "center",  fontSize:'22px'}}>{review.text}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontWeight: "600", color: "#333", display: "flex", alignItems: "center", textAlign: "center" ,fontSize:'30px'}}>
                <img src={User} alt="user" style={{ height: "42px",width:'42px',   marginRight: "8px"}} />
                {review.author}
              </span>
              <div style={{ display: "flex", marginLeft: "8px", color: "#FFD700", }}>
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    style={{ width: "25px", height: "25px", }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
