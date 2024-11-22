// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Sample data for testimonials
const testimonialData = [
  {
    id: 1,
    text: "I switched to 1 Zeta a few months ago, and I couldn’t be happier. The speed is Great, and the customer support is very responsive. It’s great to have a reliable internet connection that doesn’t cost a fortune!",
    name: "Amit Sharma",
    image: "./assets/images/amit.png", // Add your image or remove if not required
  },
  {
    id: 2,
    text: "1 Zeta has been a game-changer for my home office setup. The connection is fast and steady, even with multiple devices & best service. I highly recommend them to anyone looking for affordable and quality internet.",
    name: "Priya Deshmukh",
    image: "./assets/images/priya.png", // Add your image or remove if not required
  },
  {
    id: 3,
    text: "After dealing with inconsistent connections, switching to 1 Zeta has been amazing. The setup was quick, speed is great, and their customer service team was so helpful. I finally have internet I can rely on.",
    name: "Rajesh Gupta",
    image: "./assets/images/rajesh.png", // Add your image or remove if not required
  },
];

export default function Testimonial() {

 
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true, // Enable center mode to add gap
    // centerMargin: "20px", // Adds padding between the center and adjacent slides
    focusOnSelect: true,
    nextArrow: <div className="swiper-button-next" />,
    prevArrow: <div className="swiper-button-prev" />,

    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller screens
        settings: {
          slidesToShow: 2,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
      
    ],
  };

  return (
    <div>
  
  {/* <div style={{width:"100%",height:"500px"}} data-fillout-id="vfWhSgknCPus" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div><script src="https://server.fillout.com/embed/v1/"></script> */}

      <div className="slider-1 testimonial text-light d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="text-center w-lg-75 m-auto pb-4">
              <p>TESTIMONIALS</p>
              <h2 className="py-2">What Our Clients Say</h2>
              <p className="para-light text-center">
              See what our happy customers have to say about the high-speed, reliable service of 1 Zeta Fiber!
              </p>
            </div>
          </div>
          <div className="row p-2" data-aos="zoom-in">
            <div className="col-md-12 col-11 m-auto">
              {/* Slider Container */}
              <div className="slider-container ">
                <Slider {...settings}>
                  {testimonialData.map((testimonial) => (
                    <div key={testimonial.id} className="swiper-slide">
                      <div className="testimonial-card p-4">
                        <p>{testimonial.text}</p>
                        <div className="d-flex pt-4">
                          <div>
                            {/* Image (optional, you can remove if not needed) */}
                            {testimonial.image && (
                              <img
                                className="avatar"
                                src={testimonial.image}
                                alt={`testimonial-${testimonial.id}`}
                              />
                            )}
                          </div>
                          <div className="ms-3 pt-2">
                            <h6>{testimonial.name}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    

   
    </div>
  );
}
