import React, { Component } from "react";
import Context from "./Context";

export default class LoginProvider extends Component {
  state = Context;
  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          onEmailChange: e =>
            this.setState({
              email: e.target.value
            }),
          onPasswordChange: e =>
            this.setState({
              password: e.target.value
            }),
          setData: data =>
            this.setState({
              data
            }),
          onLogin: () => {
            const { email, password } = this.state;
            if (email === "testuser" && password === "password") {
              this.setState({
                isLoggedIn: true,
                isError: false
              });
            } else {
              this.setState({
                isLoggedIn: false,
                isError: true
              });
            }
          }
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
