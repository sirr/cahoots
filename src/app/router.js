import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Auth from '../features/Auth';
import Home from '../features/Home';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={Auth} title="Login" hideNavBar />
      </Scene>
      <Scene key="main">
        <Scene key="home" component={Home} title="Home" initial />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
