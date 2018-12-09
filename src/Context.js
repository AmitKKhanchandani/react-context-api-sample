import React from "react";

const Context = React.createContext({
  state: {
    email: "",
    password: "",
    isLoggedIn: false,
    isError: "",
    data: []
  }
});

export default Context;
