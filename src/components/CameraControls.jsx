import { extend, useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

export default function CameraControls({ roomId }) {
	const {
		camera,
		gl: { domElement },
	} = useThree();
	const controlsRef = useRef();

	useEffect(() => {
		camera.position.set(0, 0, 5);
	}, [roomId]);

	useFrame(() => {
		controlsRef.current.update();
	});

	return (
		<orbitControls
			ref={controlsRef}
			args={[camera, domElement]}
			enableZoom={false}
			enablePan={false}
			enableDamping={true}
			dampingFactor={0.05}
			rotateSpeed={-0.15}
		/>
	);
}
