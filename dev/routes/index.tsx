import React from 'react';
import { Switch, Redirect } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import Layout from '../components/layout/Layout';
import Home from '../components/layout/Home';


// const Countdown = loadable(() => import('../components/Countdown'));
// const Hover = loadable(() => import('../components/Hover'));
// const Mouse = loadable(() => import('../components/Mouse'));
// const Storage = loadable(() => import('../components/Storage'));
// const Toggle = loadable(() => import('../components/Toggle'));

const RouteComponents = [
  {
    component: loadable(() => import('../components/useCountdown')),
    path: '/useCountdown'
  },
  {
    component: loadable(() => import('../components/useHover')),
    path: '/useHover'
  },
  {
    component: loadable(() => import('../components/useMouse')),
    path: '/useMouse'
  },
  {
    component: loadable(() => import('../components/useLocalStorage')),
    path: '/useLocalStorage'
  },
  {
    component: loadable(() => import('../components/useToggle')),
    path: '/useToggle'
  }
].map(({ component: Component, path }) => {
  return (
    <Route path={path} key={path}>
      <Component />
    </Route>
  )
})

function Routes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          { RouteComponents }
          <Redirect to='/'></Redirect>
        </Switch>
      </Layout>
    </Router>
  )
}

export default Routes;