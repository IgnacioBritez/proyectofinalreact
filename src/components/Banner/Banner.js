/* import React from 'react';
import "./Banner.css";

import { Link } from 'react-router-dom';

import img from './banner1.jpg';

const Header = () => {
	return (
		<div className='header-container'>
			<Link to='/'>
				<img src={img} alt='banner' width='900' />
			</Link>
		</div>
	);
};

export default Header;

*/ 

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


import img from "./banner4.jpg";
import img2 from "./banner5.jpg";
import img3 from "./banner6.jpg";


import "./Banner.css";

const Banner=()=> {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

	<div className='BanerStyle'>
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>La mejor ropa deportiva la encontras aca</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
		<Link to="/music-genre/Mujer">
        <img
          className="d-block w-100"
		  
          src={img}
          alt="Second slide"
        />
		</Link>

        <Carousel.Caption>
          <h3>TODO PARA LA MUJER</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
		<Link to="/music-genre/Hombre">
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
		</Link>

        <Carousel.Caption>
          <h3>TODO PARA EL HOMBRE</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
	  
    </Carousel>

	</div>
  );
}

export default Banner
