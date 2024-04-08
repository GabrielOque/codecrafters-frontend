import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div
      className="w-full bg-zinc-900 h-screen overflow-y-auto"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#4A5568 #2D3748",
      }}
    >

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/levels" element={<div className="font-bold text-6xl p-20 text-white">Niveles</div>} />
          <Route path="/points" element={<div className="font-bold text-6xl p-20 text-white">Puntos</div>} />
          <Route path="/results" element={<div className="font-bold text-6xl p-20 text-white">Resultados</div>} />
          <Route path="/Login" element={<div className="font-bold text-6xl p-20 text-white">Login</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
