import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import NavBar from "./NavBar";
import Snickers from "./Snickers";
import Chips from "./Chips";
import Gummybears from "./Gummybears";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/Snickers" element={<Snickers />} />
          <Route path="/Chips" element={<Chips />} />
          <Route path="/Gummybears" element={<Gummybears />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
