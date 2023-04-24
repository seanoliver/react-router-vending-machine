import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
	return (
		<div className='NavBar'>
			<NavLink to='/'>Home</NavLink> | <NavLink to='/chips'>Chips</NavLink> |{' '}
			<NavLink to='/snickers'>Snickers</NavLink> |{' '}
			<NavLink to='/Gummybears'>Gummy Bears</NavLink>
		</div>
	);
}

export default NavBar;
