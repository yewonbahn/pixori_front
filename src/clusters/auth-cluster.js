// File: ./src/clusters/auth-cluster.js

import React, {useState, useEffect, Fragment} from "react"
import {useCurrentUser} from "../hooks/current-user"
import '../styles/home.css';
function WithAuth() {
  const cu = useCurrentUser()

  return !cu.loggedIn ? null : (
    <div>
      <span>{cu.addr ?? "No Address"}</span>
      <button onClick={cu.logOut}>Log Out</button>
    </div>
  )
}

function SansAuth() {
  const cu = useCurrentUser()

  return cu.loggedIn ? null : (
    <Fragment >
    
      <button className ="login" onClick={cu.logIn}>Login</button>
     
         <button className ="Signrectangle" onClick={cu.signUp}>Sign Up</button>
</Fragment>
  )
}

export function AuthCluster() {
  return (
    <>
      <WithAuth />
      <SansAuth />
    </>
  )
}