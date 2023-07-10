import React from 'react';
import Country from './Country';
import Home from './Home';
// import Registration from './Registration';
import Regster from './Regster';
import Login from './Login';
import Landing from '../newcomponent/Landing';
import { Route,Routes  } from 'react-router-dom';

const Main = () => {
  return (
    
   
        <Routes>
            <Route path='/Home' element={<Home/>}></Route>
            <Route path='/Country' element={<Country/>}></Route>
            <Route path='/registration' element={<Regster/>}></Route>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/landing' element={<Landing/>}></Route>
        </Routes>
   
  )
}

export default Main