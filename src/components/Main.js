import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Some from './Some'


const Main = () => (
    <main>
      <Switch>
        <Route exact path='/home' component={Home}/>
        <Route path='/some' component={Some}/>
        {/*<Route path='/schedule' component={Schedule}/>*/}
      </Switch>
    </main>
);

export default Main
