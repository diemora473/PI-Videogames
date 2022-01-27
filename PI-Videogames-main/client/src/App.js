import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import VgameCreate from './componentes/VgameCreate'
import LandingPage from './component/Landing/LandindPage'
// import Home from './componentes/Home';
// import Detail from './componentes/Detail'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>

          <Route exact path='/' element={<LandingPage />} />
          {/* <Route exact path='/home' component={Home} /> */}
          {/* <Route path='/creategame' component={VgameCreate}/> */}
          {/* <Route path='/videogame/:id' component={Detail}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;