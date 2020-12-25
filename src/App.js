import './App.css';
// import Products from "./components/Products/Products";
// import Navbar from "./components/Navbar/Navbar";

import { Products, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
