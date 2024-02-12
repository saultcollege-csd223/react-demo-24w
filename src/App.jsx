import Home from "./Home";
import Other from "./Other";
import Meal from "./Meal";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  function handleProductSelected(productId) {
    navigate(`/product/${encodeURIComponent(productId)}`);
  }

  return <Routes>
    <Route path="/" element={<Home onProductSelected={handleProductSelected} />}  />
    <Route path="/other" element={<Other />} />
    <Route path="/meal/:id" element={<Meal />} />
  </Routes>
}

export default App
