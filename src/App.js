import React, { Component } from "react";
// import { connect } from "react-redux";
// import { convertCurrencyStart } from "./redux/currency/currency.actions";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   convertCurrencyStart: convertCurrency =>
//     dispatch(convertCurrencyStart(convertCurrency))
// });

export default App;
