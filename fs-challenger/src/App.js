import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/menu';
import Content from './components/content';

const SendKudos = lazy(() => import('./views/send-kudos'));

const App = () => {
  return (
    <div>
      <Router>
        <Menu />
        <Suspense fallback={<div>Loading...</div>}>
          <Content>
            <Switch>
              <Route exact={true} path='/' component={SendKudos}></Route>
            </Switch>
          </Content>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
