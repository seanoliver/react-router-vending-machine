import { Link } from "react-router-dom";

function VendingMachine() {
	return (
		<div className='VendingMachine'>
      <h1>Welcome to the Vending Machine</h1>
      <ul>
        <li><Link to="/snacks/chips">Chips</Link></li>
        <li><Link to="/snacks/snickers">Snickers</Link></li>
        <li><Link to="/snacks/gummyBears">Gummy Bears</Link></li>
      </ul>
		</div>
	);
}

export default VendingMachine;
