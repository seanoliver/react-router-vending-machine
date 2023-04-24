import { useNavigate, useParams } from 'react-router-dom';

function Snack() {
	const { name } = useParams();
	const navigate = useNavigate();

	function handleSubmit(evt) {
    evt.preventDefault();
    navigate('/');
  }

	return (
		<div className='Snack'>
			<h2>You want {name}?</h2>
			<form onSubmit={handleSubmit}>
				<button type='submit'>Go back</button>
			</form>
		</div>
	);
}
export default Snack;
