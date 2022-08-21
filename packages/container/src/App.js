import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Markrting from './components/Markrting';

const generateClassName = createGenerateClassName({
  productionPrefix:'co'
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
          <Header/>
          <h3 style={{textAlign: 'center'}}>Hi there, welcome to container!</h3>
          <Markrting/>
      </StylesProvider>
    </BrowserRouter>
  )
}

export default App;