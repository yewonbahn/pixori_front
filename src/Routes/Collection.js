import React from 'react';
import {TokenCluster} from '../clusters/token-cluster'
import {useCurrentUser} from '../hooks/current-user'

export default () => {

function Token() {
    const cu = useCurrentUser()
    return (
      <TokenCluster address={cu.addr} />
    )
  }

  return (
    <div>
      <Token />
    </div>
  );
}