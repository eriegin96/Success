import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { CanvasComp, Home } from './components';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Outlet />}>
						<Route index element={<Home />} />
						<Route path=':roomId' element={<CanvasComp />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
