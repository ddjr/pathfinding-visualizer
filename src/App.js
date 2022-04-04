import "./App.scss";
import Navbar from "./Navbar";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <PathfindingVisualizer />
    </div>
  );
}

export default App;
