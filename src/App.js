import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu/Menu';
import MyNavbar from './Components/Navbar/MyNavbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/menu' element={<Menu />}/>
      </Routes>

    </div>
  );
}

export default App;
