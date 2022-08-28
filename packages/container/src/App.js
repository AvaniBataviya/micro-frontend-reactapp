import {
  createGenerateClassName,
  StylesProvider
} from '@material-ui/core/styles';
import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';

const Markrting = lazy(() => import('./components/Markrting'));
const Auth = lazy(() => import('./components/Auth'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header
          onSignOut={() => setIsSignedIn(false)}
          isSignedIn={isSignedIn}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <Auth
                onSignIn={() => {
                  console.log('btn click');
                  setIsSignedIn(true);
                }}
              />
            </Route>
            <Route path="/" component={Markrting} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
