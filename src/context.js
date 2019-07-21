import React, { createContext } from "react";

export const { Provider, Consumer } = createContext();

// withContext() receive a component and return a new component.
// From props => ... is a functional component that is created
export const withContext = Component => props => (
  <Consumer>{value => <Component {...value} {...props} />}</Consumer>
);
