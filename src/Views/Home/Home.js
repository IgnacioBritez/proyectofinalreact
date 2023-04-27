import React from 'react';
import CardList from '../../components/CardList/CardList';
import './Home.css';
import Banner from "../../components/Banner/Banner";

const Home = () => {
	return (
		
		<div className='HomeContainer'>
			<Banner/>
			<CardList />
		</div>
	);
};

export default Home;
