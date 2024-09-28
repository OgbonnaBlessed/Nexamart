import React, { useState } from "react"
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import './Carousel.css'

const Carousel = () => {
    const slides = [
      {
        image: "https://via.placeholder.com/1600x500.png?text=Slide+1",
        text: "Amazing Deals on Electronics",
        cta: "Shop Electronics",
        path: "electronics",
      },
      {
        image: "https://via.placeholder.com/1600x500.png?text=Slide+2",
        text: "Discover Top Fashion Brands",
        cta: "Shop Fashion",
        path: "fashion",
      },
      {
        image: "https://via.placeholder.com/1600x500.png?text=Slide+3",
        text: "Explore Our Home Essentials",
        cta: "Shop Home Essentials",
        path: "home-essentials",
      },
      {
        image: "https://via.placeholder.com/1600x500.png?text=Slide+4",
        text: "Best Deals on Mobile Phones",
        cta: "Shop Mobile Phones",
        path: "mobile-phones",
      },
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      beforeChange: (current, next) => setCurrentSlide(next),
      fade: true,
    };
  
    return (
      <div className="relative">
        <Slider {...settings} className="overflow-hidden">
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <img
                src={slide.image}
                alt={slide.text}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 bg-black bg-opacity-50">
                <h2 className="text-4xl font-bold text-white">{slide.text}</h2>
                <div className="relative group">
                    <Link to={`category/${slide.path}`}>
                        <button
                            className="relative z-10 px-6 py-3 font-semibold text-white bg-teal-500 hover:bg-teal-600 rounded-md"
                        >
                            {slide.cta}
                        </button>
                    </Link>
                  <span className="absolute inset-0 block border-2 border-teal-400 rounded-md animate-pulse"></span>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">
            {currentSlide}
        </div>
      </div>
    );
  };
  
  export default Carousel;