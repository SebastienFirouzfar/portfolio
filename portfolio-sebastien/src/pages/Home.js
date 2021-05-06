import React from "react";
import { Carousel } from 'react-bootstrap';

const tabImg = [
  "./img/pexels-negative-space-160107.jpg",
  "./img/IMG_24822.jpg",
];

const displayImg = tabImg.map((tech) => (
  <img key={tech} src={tech} alt="computer" />
));

const Home = () => {
  return (
    <div class="container">
    <Carousel>
      <Carousel.Item>
        <img
          className="d"
          src="./img/IMG_24822.jpg"
          alt="First slide"
        />
    
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className=""
          src="./img/pexels-negative-space-160107.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
  
    </Carousel>

    </div>
  );
};

export default Home;
