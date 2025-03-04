import React from 'react'
import NdkLoginComp from './NdkLoginComp'
import NdkLogoutComp from './NdkLogoutComp'

export default function NdkLoginControl(props) {
  const ndkElement = props.isLoggedIn ? <NdkLoginComp /> : <NdkLogoutComp />

  // const ndkLogin = ()=>{
  //     if(props.isLoggedIn)
  //         return <NdkLogoutComp />
  //     else 
  //         return <NdkLoginComp />
  // }

  return (
    <div>
      {ndkElement}
    </div>
  )
}