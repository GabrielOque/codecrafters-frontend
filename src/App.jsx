import Home from "./pages/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div
      className="w-full bg-zinc-900 h-screen overflow-y-auto"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#4A5568 #2D3748",
      }}
    >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
