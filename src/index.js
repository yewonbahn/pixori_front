import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';

import "./config"
import {AuthCluster} from './clusters/auth-cluster';
import {RecoilRoot} from "recoil"
import {CurrentUserSubscription} from "./hooks/current-user"

import {InitCluster} from "./clusters/init-cluster"
import {useCurrentUser} from "./hooks/current-user"

function Init() {
  const cu = useCurrentUser()
  return (
    <InitCluster address={cu.addr} />
  )
}


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <AuthCluster />
      <CurrentUserSubscription />
      <Init />
      <App />
    </RecoilRoot>
  </React.StrictMode>, document.getElementById('root'));