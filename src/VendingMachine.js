import { Link } from "react-router-dom";
import './VendingMachine.css';

function VendingMachine() {
	return (
		<div className='VendingMachine'>
      <h1>Welcome to the Vending Machine</h1>
      <ul>
        <li><Link to="/chips">Chips</Link></li>
        <li><Link to="/snickers">Snickers</Link></li>
        <li><Link to="/Gummybears">Gummy Bears</Link></li>
      </ul>
		</div>
	);
}

export default VendingMachine;
