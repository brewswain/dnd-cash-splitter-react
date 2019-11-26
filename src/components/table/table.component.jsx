import React, { Component } from "react";
import { connect } from "react-redux";

import { convertCurrencyStart } from "../../redux/currency/currency.actions";

import resetInputs from "../reset-inputs/reset-inputs.component";
import CurrencyForm from "../currency-form/currency-form.component";

import "./table.styles.scss";

class Table extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     partyMembers: 0,
  //     platinum: 0,
  //     gold: 0,
  //     electrum: 0,
  //     silver: 0,
  //     copper: 0,
  //     convertedPlatinum: 0,
  //     convertedGold: 0,
  //     convertedElectrum: 0,
  //     convertedSilver: 0,
  //     convertedCopper: 0,
  //     copperAfterPlatinum: 0,
  //     copperAfterGold: 0,
  //     copperAfterSilver: 0,
  //     leftOver: 0
  //   };
  // }

  // handleChange(event) {
  //   this.setState({ [event.target.name]: event.target.value });
  // }

  render() {
    // const {
    //   partyMembers,
    //   platinum,
    //   gold,
    //   electrum,
    //   silver,
    //   copper,
    //   convertedPlatinum,
    //   convertedGold,
    //   convertedSilver,
    //   convertedCopper,
    //   copperAfterPlatinum,
    //   copperAfterGold,
    //   copperAfterSilver,
    //   leftOver
    // } = this.props;

    // const convertToCopper = () => {
    //   this.setState(
    //     {
    //       convertedCopper: Math.round(
    //         (platinum * 1000 +
    //           gold * 100 +
    //           electrum * 50 +
    //           silver * 10 +
    //           copper * 1) /
    //           partyMembers
    //       ),
    //       convertedPlatinum: Math.floor(convertedCopper / 1000),
    //       copperAfterPlatinum: convertedCopper % 1000,
    //       convertedGold: Math.floor(copperAfterPlatinum / 100),
    //       copperAfterGold: copperAfterPlatinum % 100,
    //       convertedSilver: Math.floor(copperAfterGold / 10),
    //       copperAfterSilver: Math.floor(copperAfterGold % 10),
    //       leftOver: Math.floor(copperAfterSilver % partyMembers)
    //     },
    //     () => {
    //       renderCashSplit();
    //     }
    //   );
    // };

    // const renderCashSplit = () => {
    //   return convertedCopper
    //     ? `Everybody gets ${convertedPlatinum} platinum, ${convertedGold} gold, ${convertedSilver} silver, and ${copperAfterSilver} copper, with ${leftOver} copper remaining.`
    //     : "";
    // };

    return <CurrencyForm />;
  }
}

// const mapStateToProps = state => ({
//   partyMembers: state.currency.partyMembers,
//   platinum: state.currency.platinum,
//   gold: state.currency.gold,
//   electrum: state.currency.electrum,
//   silver: state.currency.silver,
//   copper: state.currency.copper,
//   convertedPlatinum: state.currency.convertedPlatinum,
//   convertedGold: state.currency.convertedGold,
//   convertedElectrum: state.currency.convertedElectrum,
//   convertedSilver: state.currency.convertedSilver,
//   convertedCopper: state.currency.convertedCopper,
//   copperAfterPlatinum: state.currency.copperAfterPlatinum,
//   copperAfterGold: state.currency.copperAfterGold,
//   copperAfterSilver: state.currency.copperAfterSilver,
//   leftOver: state.currency.leftOver
// });

export default Table;
