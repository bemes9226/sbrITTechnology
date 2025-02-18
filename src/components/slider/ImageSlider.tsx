// src/components/ImageSlider.js
import React from "react";
import Slider from "react-slick";
export const ImageSlider = () => {
  // Sample image URLs (you can replace these with URLs from your database or an API)
  const images = [
    `/images/img1 (1).jpg`,
    "/images/img1 (2).jpg",
    "/images/img1 (3).jpg",
    "/images/img1 (4).jpg",
    "/images/img1 (5).jpg",
    "/images/img1 (6).jpg",
    "/images/img1 (7).jpg",
    "/images/img1 (8).jpg",
    "/images/img1 (9).jpg",
    "/images/img1 (10).jpg",
    "/images/img1 (11).jpg",
    "/images/img1 (12).jpg",
    "/images/img1 (13).jpg",
    "/images/img1 (14).jpg",
    "/images/img1 (15).jpg",
    "/images/img1 (16).jpg",
    "/images/img1 (17).jpg",
    "/images/img1 (18).jpg",
    "/images/img1 (19).jpg",
    "/images/img1 (20).jpg",
    "/images/img1 (21).jpg",
    "/images/img1 (22).jpg",
    "/images/img1 (23).jpg",
    "/images/img1 (24).jpg",
    "/images/img1 (25).jpg",
    "/images/img1 (26).jpg",
    "/images/img1 (27).jpg",
    "/images/img1 (28).jpg",
    "/images/img1 (29).jpg",
    "/images/img1 (30).jpg",
    "/images/img1 (31).jpg",
    "/images/img1 (32).jpg",
    "/images/img1 (33).jpg",
    "/images/img1 (34).jpg",
    "/images/img1 (35).jpg",
    "/images/img1 (36).jpg",
    "/images/img1 (37).jpg",
    "/images/img1 (38).jpg",
    "/images/img1 (39).jpg",
    "/images/img1 (40).jpg",
    "/images/img1 (41).jpg",
    "/images/img1 (42).jpg",
    "/images/img1 (43).jpg",
    "/images/img1 (44).jpg",
    "/images/img1 (45).jpg",
    "/images/img1 (46).jpg",
    "/images/img1 (47).jpg",
    "/images/img1 (48).jpg",
    "/images/img1 (49).jpg",
    "/images/img1 (50).jpg",
    "/images/img1 (51).jpg",
    "/images/img1 (52).jpg",
    "/images/img1 (53).jpg",
  ];

  // Slider settings
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust autoplay speed if necessary
    dots: true, // Show pagination dots
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
