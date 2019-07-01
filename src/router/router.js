import React, { Component } from 'react';
import { Route, Switch, hashHistory, HashRouter, Router } from 'react-router-dom';

import Load from 'pages/Load/Load';
import Guide from 'pages/Guide/Guide';
import PicRight from 'pages/PicRight/PicRight';
import Seek from 'pages/Seek/Seek';
import ChoosePage from 'pages/ChoosePage/ChoosePage';
import Password from 'pages/Password/Password';

import createHistory from 'history/createHashHistory'

const history = createHistory()


class GetRouter extends Component {
  render() {

    return (
      <Router history={history}>
        <Route render={({ location }) => {
          console.log(location)
          return <Switch>
            <Route exact path="/" component={Load} />
            <Route path="/guide" component={Guide} />
            <Route path="/pic-right" component={PicRight} />
            <Route path="/seek" component={Seek} />
            <Route path="/choose-page" component={ChoosePage} />
            <Route path="/password" component={Password} />
          </Switch>
        }
        } />
      </Router>
    )
  }
}

export default GetRouter;