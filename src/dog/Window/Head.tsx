import * as React from 'react'
import * as ReactDOM from 'react-dom'


export class Head extends React.Component<any, any> {
  render() {
    return (
      <div Class="Dog3D-head">
        <div Class="Dog3D-head-inner">
          <div Class="head-logo">

          </div>
          <div Class="head-search">
            <input type="text" Class="search-edit" PlaceHolder ="搜索"></input>
            <span Class="search-button">
              <span Class="search-button-img">
              </span>
            </span>
          </div>
          <div Class="head-register">
            <span Class="register-img"></span>
            <span Class="register-button"></span>
          </div>
          <div Class="head-login">
            <span Class="login-img"></span>
            <span Class="login-button"></span>
          </div>
        </div>
      </div>
    )




  }
}  