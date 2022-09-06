import React from 'react';
import { Html } from '@react-three/drei';

export default function Loading({ progress }) {
	return (
		<Html center className='loading'>
			{progress} % loaded
		</Html>
	);
}
