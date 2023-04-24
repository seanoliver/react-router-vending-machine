import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<div className='NavBar'>
			<Link to='/'>Home</Link> | <Link to='/snacks/chips'>Chips</Link> |{' '}
			<Link to='/snacks/snickers'>Snickers</Link> |{' '}
			<Link to='/snacks/gummyBears'>Gummy Bears</Link>
		</div>
	);
}

export default NavBar;
