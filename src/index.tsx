import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react"; // MobX 에서 사용하는 Provider
import RootStore from "./store";

const root = new RootStore(); // *** 루트 스토어 생성

ReactDOM.render(
  <React.StrictMode>
    <Provider {...root}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
