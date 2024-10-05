import React, { useState } from "react"
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import './Carousel.css'
import { FiExternalLink } from 'react-icons/fi'

const Carousel = () => {
    const slides = [
      {
        image: `${process.env.PUBLIC_URL}/images/slide1.webp`,
        text: "Amazing Deals on Electronics",
        info: "Get the best prices on the latest gadgets and electronics. From smartphones to home appliances, find everything you need to stay connected and equipped.",
        cta: "Shop Electronics",
        path: "electronics",
      },
      {
        image: `${process.env.PUBLIC_URL}/images/slide2.jpeg`,
        text: "Discover Top Fashion Brands",
        info: "Refresh your wardrobe with the hottest styles from leading fashion brands. Whether it's casual, formal, or streetwear, we've got something for every trendsetter.",
        cta: "Shop Fashion",
        path: "fashion",
      },
      {
        image: `${process.env.PUBLIC_URL}/images/slide3.jpg`,
        text: "Explore Our Home Essentials",
        info: "Upgrade your living space with quality home essentials. From kitchen tools to cozy bedding, find everything you need to create the perfect home.",
        cta: "Shop Home Essentials",
        path: "home-essentials",
      },
      {
        image: `${process.env.PUBLIC_URL}/images/slide4.jpg`,
        text: "Best Deals on Mobile Phones",
        info: "Stay connected with the latest smartphones at unbeatable prices. Whether you're looking for cutting-edge features, long battery life, or the best camera, we’ve got the perfect phone for you.",
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
                className="w-full h-[320px] sm:h-[400px] lg:h-[550px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center text-start space-y-4 lg:pl-20 pl-6">
                <h2 className="lg:text-4xl sm:text-2xl text-xl font-bold italic">{slide.text}</h2>
                {/* <p className="sm:w-[500px] w-[300px] pr-5 font-semibold text-black">{slide.info}</p> */}
                <div className="relative group">
                    <Link to={`category/${slide.path}`}>
                        <button
                            className="relative z-10 px-6 py-3 font-semibold text-white bg-teal-500 hover:bg-teal-600 rounded-md flex gap-2 items-center"
                        >
                            {slide.cta}
                            <FiExternalLink size={20}/>
                        </button>
                    </Link>
                  <span className="absolute inset-0 block border-2 border-teal-400 rounded-md animate-pulse"></span>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">
            {currentSlide.text}
        </div>
      </div>
    );
  };
  
  export default Carousel;