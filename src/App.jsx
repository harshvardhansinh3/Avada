import React from 'react'
import { Home } from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Explore } from './Pages/Explore';

export const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/explore' element={<Explore/>} />
      
    </Routes>
    
    </BrowserRouter>
  )
}
export default App;