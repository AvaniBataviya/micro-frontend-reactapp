import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Markrting from './components/Markrting';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <h3 style={{textAlign: 'center'}}>Hi there, welcome to container!</h3>
      <Markrting/>
    </BrowserRouter>
  )
}

export default App;