import React, { Component } from "react";
import LoginProvider from "./LoginProvider";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import Context from "./Context";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginProvider>
          <div>
            <Context.Consumer>
              {context => (
                <React.Fragment>
                  {!context.state.isLoggedIn ? <LoginPage /> : <HomePage />}
                  {context.state.isError && <span>invalid details</span>}
                </React.Fragment>
              )}
            </Context.Consumer>
          </div>
        </LoginProvider>
      </React.Fragment>
    );
  }
}
export default App;
