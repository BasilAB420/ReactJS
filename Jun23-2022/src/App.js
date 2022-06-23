// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

    <div className="App">

      <Nav />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />} />
      </Routes>

    </div>

    </BrowserRouter>
  );
}

export default App;
