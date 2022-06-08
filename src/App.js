import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Explore from './components/Explore';
import Plans from './components/Plans';
import Join from './components/Join';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;