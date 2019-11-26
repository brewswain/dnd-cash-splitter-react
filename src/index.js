import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

import store from "./redux/store";

import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBunj-73saqVCUTeEgNaQHgFsEor8xvG-E",
  authDomain: "dnd-cash-split.firebaseapp.com",
  databaseURL: "https://dnd-cash-split.firebaseio.com",
  projectId: "dnd-cash-split",
  storageBucket: "dnd-cash-split.appspot.com",
  messagingSenderId: "370971565790",
  appId: "1:370971565790:web:beb302b4682ee07245ac4f",
  measurementId: "G-P8R0KN49CK"
};

firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
