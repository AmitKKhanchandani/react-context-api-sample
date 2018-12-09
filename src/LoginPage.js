import React, { Component } from "react";
import Context from "./Context";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="person">
        <Context.Consumer>
          {context => (
            <React.Fragment>
              <h2>Login</h2>
              <div style={{ "margin-bottom": "20px" }}>
                <div>email: testuser</div>
                <div>password: password</div>
              </div>
              <input
                type="text"
                value={context.state.email}
                onChange={e => context.onEmailChange(e)}
              />
              <input
                type="password"
                value={context.state.password}
                onChange={e => context.onPasswordChange(e)}
              />
              <button onClick={context.onLogin}>Login</button>
            </React.Fragment>
          )}
        </Context.Consumer>
      </div>
    );
  }
}
