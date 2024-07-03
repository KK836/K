// import React from 'react'

// jsx
// const h1 = <h1>Hello world</h1>;

//react
// const h1_1 = React.createElement("h1", null, "Hello world");

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
