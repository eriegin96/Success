import { Html, Sphere, useTexture } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';

export default function Room(props) {
	const { roomId, map, slug, navigate, position = [0, 0, 0], portals } = props;
	const { colorMap } = useTexture({ colorMap: map });

	return (
		<>
			<mesh position={position}>
				<Sphere args={[100, 32, 32]}>
					<meshStandardMaterial map={colorMap} side={THREE.BackSide} />
					{roomId === slug &&
						portals.map((portal, index) => (
							<Html
								key={index}
								removeFromParent
								wrapperClass='wrapper'
								className='content'
								transform
								position={portal.position}
								rotation={portal.rotation}
								distanceFactor={12}
								zIndexRange={[1, 0]}
							>
								<div
									className='link'
									onClick={() => {
										navigate(`/${portal.destination}`);
									}}
								>
									{portal.title}
								</div>
							</Html>
						))}
				</Sphere>
			</mesh>
		</>
	);
}
