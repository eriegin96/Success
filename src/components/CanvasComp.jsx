import { useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CameraControls, Loading, Room } from '.';
import Room1 from '../assets/textures/photo-1.jpg';
import Room2 from '../assets/textures/photo-2.jpg';

const roomList = [
	{
		map: Room1,
		slug: '1',
		position: [0, 0, 0],
		portals: [
			{
				title: 'Room 2',
				destination: '2',
				position: [15, -3, 1.6],
				rotation: [0, -Math.PI / 2, 0],
			},
		],
	},
	{
		map: Room2,
		slug: '2',
		position: [0, 0, 0],
		portals: [
			{
				title: 'Room 1',
				destination: '1',
				position: [10, -4, -15],
				rotation: [0, -Math.PI / 4, 0],
			},
		],
	},
];

export default function CanvasComp() {
	const { progress } = useProgress();
	const { roomId } = useParams();
	const navigate = useNavigate();
	const [roomComp, setRoomComp] = useState(() => {
		return roomList.find((r) => r.slug === roomId);
	});

	useEffect(() => {
		setRoomComp(roomList.find((r) => r.slug === roomId));
	}, [roomId]);

	return (
		<>
			<Canvas id='canvas'>
				<ambientLight intensity={1} />

				<Suspense fallback={<Loading progress={progress} />}>
					<Room
						roomId={roomId}
						map={roomComp.map}
						slug={roomComp.slug}
						navigate={navigate}
						position={roomComp.position}
						portals={roomComp.portals}
					/>
				</Suspense>

				<CameraControls roomId={roomId} />
			</Canvas>
		</>
	);
}
