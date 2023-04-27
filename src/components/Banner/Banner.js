import React from 'react';
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
