import {
  createGenerateClassName,
  StylesProvider
} from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Markrting from './components/Markrting';
import Auth from './components/Auth';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <h3 style={{ textAlign: 'center' }}>Hi there, welcome to container!</h3>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" component={Markrting} />
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
