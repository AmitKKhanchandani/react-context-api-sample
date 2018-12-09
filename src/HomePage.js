import React, { Component } from "react";
import Context from "./Context";

class HomePage extends Component {
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=15")
      .then(function(response) {
        return response.json();
      })
      .then(
        function(res) {
          this.props.context.setData(res);
        }.bind(this)
      );
  }

  render() {
    console.log(this.props.context.state);
    const { data, email } = this.props.context.state;
    return (
      <div className="person">
        <span>{`hello ${email}, here are the list of your user`}</span>
        <div>
          {data &&
            data.results.map((value, i) => {
              return (
                <div style={{ margin: "20px" }}>
                  <div>{`${value.name.first} ${value.name.last}`}</div>
                  <div>{value.email}</div>
                  <div>{value.phone}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const WrapComponent = () => (
  <Context.Consumer>
    {context => <HomePage context={context} />}
  </Context.Consumer>
);

export default WrapComponent;
