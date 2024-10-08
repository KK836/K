import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UseStateApp1 from "./UseStateApp1";
import UseStateApp2 from "./UserStateApp2";
import UseEffectApp1 from "./UseEffectApp1";
import UseEffectApp2 from "./UseEffectApp2";
import UseContextApp1 from "./UseContextApp1";
import UseRefApp1 from "./UseRefApp1";
import UseRefApp2 from "./UseRefApp2";
import UseRefApp3 from "./UseRefApp3";
import UseRefApp4 from "./UseRefApp4";
import UseMemoApp1 from "./UseMemoApp1";
import UseMemoApp2 from "./UseMemoApp2";
import UseCallbackApp1 from "./UseCallbackApp1";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <useLayoutEffectApp1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
