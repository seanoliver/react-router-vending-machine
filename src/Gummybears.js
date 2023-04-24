import { useNavigate } from "react-router-dom";

function Gummybears() {
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate("/");
  }

  return (
    <div className="Gummybears">
      <div>You want gummy bears!</div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Go back</button>
      </form>
    </div>
  );
}

export default Gummybears;
