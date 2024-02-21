import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import ThemeSwitcher from './ThemeSwitcher';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <NavLink to="/" className={"nav-link"}>INICIO</NavLink>
          <NavLink to="/header" className={"nav-link"}>CABECERA</NavLink>
          <NavLink to="/tema" className={"nav-link"}>CAMBIAR TEMA</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<h1>ESTE ES EL INICIO</h1>}/>
          <Route path='/header' element={<Header/>}/>
          <Route path='/tema' element={<ThemeSwitcher/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
