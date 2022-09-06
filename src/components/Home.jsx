import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className='home'>
			<h1>Welcome to Vizion</h1>
			<Link to='/1'>Explore the rooms</Link>
		</div>
	);
}
