import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VgameCreate from './component/Create/VgameCreate'
import LandingPage from './component/Landing/LandindPage'
import Home from './component/Home/Home';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getVgames, getPlatforms } from './action/action';
import Detail from './component/Detail/Detail';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVgames());
    dispatch(getPlatforms());
  }, [dispatch])
  return (
    <BrowserRouter>
      <div className='App'>
        {/* <h4>hola</h4> */}
        <Routes>

          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/creategame' element={<VgameCreate />} />
          <Route path='/videogame/:id' element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;