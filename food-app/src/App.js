import './styles/index.scss';
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useState } from 'react';
function App() {
  return (<div className='app'>
    <Header />
    <Outlet />
    <Footer />
  </div>);
}

export default App;
