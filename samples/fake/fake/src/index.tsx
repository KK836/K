import React from "react";
import ReactDOM from "react-dom/client";
import * as D from "./data";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <img src={D.randomAvatar()}></img>
  </div>
));

// const rootvirtualDOM = <div>{children}</div>;
const rootvirtualDOM = <App />;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(rootvirtualDOM);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
