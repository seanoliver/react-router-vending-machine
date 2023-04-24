import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Snack from './Snack';
import VendingMachine from './VendingMachine';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<VendingMachine />}>
					</Route>
					<Route
						path='/snacks/:name'
						element={<Snack />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
