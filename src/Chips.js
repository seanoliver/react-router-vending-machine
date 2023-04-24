import { useNavigate } from "react-router-dom";

function Chips() {
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate("/");
  }
 //TODO: go back could just be a link
  return (
    <div className="Chips">
      <div>You want chips!</div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Go back</button>
      </form>
    </div>
  );
}

export default Chips;