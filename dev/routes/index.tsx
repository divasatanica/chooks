import React from 'react';
import { Switch, Redirect } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import Layout from '../components/layout/Layout';
import Home from '../components/layout/Home';

const RouteComponents = [
  {
    component: loadable(() => import('../components/useCountdown/index')),
    path: '/useCountdown'
  },
  {
    component: loadable(() => import('../components/useHover/index')),
    path: '/useHover'
  },
  {
    component: loadable(() => import('../components/useMouse/index')),
    path: '/useMouse'
  },
  {
    component: loadable(() => import('../components/useLocalStorage/index')),
    path: '/useLocalStorage'
  },
  {
    component: loadable(() => import('../components/useToggle/index')),
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