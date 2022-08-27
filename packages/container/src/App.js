import {
  createGenerateClassName,
  StylesProvider
} from '@material-ui/core/styles';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';

const Markrting = lazy(() => import('./components/Markrting'));
const Auth = lazy(() => import('./components/Auth'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" component={Markrting} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
