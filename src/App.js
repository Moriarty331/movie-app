import './App.css';
import {Home} from './pages/Home.js'
import {Movies} from './pages/Movies.js'
import {TvShows} from './pages/TvShows.js'
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/tv-shows" element={<TvShows></TvShows>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
