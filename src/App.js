import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Snack from './Snack';
import VendingMachine from './VendingMachine';
import NavBar from './NavBar';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
        <NavBar />
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
