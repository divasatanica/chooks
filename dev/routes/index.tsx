import React, { lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../components/layout/Home';

const RouteComponents = [
  {
    component: lazy(() => import('../components/useCountdown/index')),
    path: '/useCountdown'
  },
  {
    component: lazy(() => import('../components/useHover/index')),
    path: '/useHover'
  },
  {
    component: lazy(() => import('../components/useMouse/index')),
    path: '/useMouse'
  },
  {
    component: lazy(() => import('../components/useLocalStorage/index')),
    path: '/useLocalStorage'
  },
  {
    component: lazy(() => import('../components/useToggle/index')),
    path: '/useToggle'
  }
].map(({ component: Component, path }) => {
  return (
    <Route path={path} key={path}>
      <Suspense fallback={<span>Loading...</span>}>
        <Component />
      </Suspense>
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