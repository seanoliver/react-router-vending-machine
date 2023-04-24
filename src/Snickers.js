import { useNavigate } from "react-router-dom";

function Snickers() {
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate("/");
  }

  return (
    <div className="Snickers">
      <div>You want Snickers!</div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Go back</button>
      </form>
    </div>
  );
}

export default Snickers;