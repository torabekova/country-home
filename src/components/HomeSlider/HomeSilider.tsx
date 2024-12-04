import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeSilider.css";
import villa1 from "./img/villa1.jpg";
import villa3 from "./img/villa3.jpg";
import villa5 from "./img/villa5.jpg";

const SliderSection = () => {
  const navigate = useNavigate();
  
  interface Slide {
    id: number;
    content: string;
    bgImage: string;
  }

  const slides: Slide[] = [
    { id: 1, content: "Slide 1", bgImage: villa1 },
    { id: 2, content: "Slide 2", bgImage: villa5 },
    { id: 3, content: "Slide 3", bgImage: villa3 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-section" style={{ maxWidth: "2000px", width: "100%", margin: "auto", display: "flex", justifyContent: "space-around" }}>
      <div className="slider">
        <div
          className="slide"
          style={{
            backgroundImage: `url(${slides[currentSlide].bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px", // Set the height of the slide
            color: "white",  // Text color to ensure visibility
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Optional text shadow for better visibility
          }}
        >
          {slides[currentSlide].content}
        </div>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="content">
        <h3>Why Choose Us?</h3>
        <h1>Nature's Majesty Awaits You</h1>
        <p>
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam Quis
          Enim Asperiores Repellat Nulla Voluptatum Hic Alias Cum Doloribus
          Quibusdam. Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
        </p>
        <button className="read-more" onClick={() => navigate("/details")}>Read More</button>
      </div>
    </div>
  );
};

export default SliderSection;
