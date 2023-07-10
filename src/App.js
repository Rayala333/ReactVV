import React, { createContext, useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom'

import './App.css';

export const store = createContext()

const App = () => {
  const [storeData,setstoreData]=useState(false)

  return (

    <store.Provider value={[storeData,setstoreData]}>

      <div class="container-fluid vh-100 ">
      <BrowserRouter>
        <div class="row"><Header/></div>

        <div className='row '><Main/></div>

        <div className='row fixed-bottom'><Footer/></div>
      </BrowserRouter>
      </div>

    </store.Provider>

  )

}




export default App