import React, { Component } from 'react';
import { Route, Switch, hashHistory, HashRouter } from 'react-router-dom';
import { createComponent } from 'router/Bundle';
import Load from 'bundle-loader?lazy&name=[name]!pages/Load/Load';
import Guide from 'bundle-loader?lazy&name=[name]!pages/Guide/Guide';
import PicRight from 'bundle-loader?lazy&name=[name]!pages/PicRight/PicRight';
import Seek from 'bundle-loader?lazy&name=[name]!pages/Seek/Seek';
import ChoosePage from 'bundle-loader?lazy&name=[name]!pages/ChoosePage/ChoosePage';
import Password from 'bundle-loader?lazy&name=[name]!pages/Password/Password';

class GetRouter extends Component {
  render() {
    return (
      <HashRouter history={hashHistory}>
        <Switch>
          <Route exact path="/" component={createComponent(Load)}/>
          <Route path="/guide" component={createComponent(Guide)}/>
          <Route path="/pic-right" component={createComponent(PicRight)}/>
          <Route path="/seek" component={createComponent(Seek)}/>
          <Route path="/choose-page" component={createComponent(ChoosePage)}/>
          <Route path="/password" component={createComponent(Password)}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default GetRouter;