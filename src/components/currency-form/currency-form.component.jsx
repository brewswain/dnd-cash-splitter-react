import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";

import "./currency-form.styles.scss";

let CurrencyForm = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    partyMembers,
    platinum,
    gold,
    electrum,
    silver,
    copper,
    hidden
  } = props;

  const convertedCopper = Math.round(
    (platinum * 1000 + gold * 100 + electrum * 50 + silver * 10 + copper * 1) /
      partyMembers
  );
  //   /partyMembers
  const convertedPlatinum = Math.floor(convertedCopper / 1000);
  const copperAfterPlatinum = convertedCopper % 1000;
  const convertedGold = Math.floor(copperAfterPlatinum / 100);
  const copperAfterGold = copperAfterPlatinum % 100;
  const convertedSilver = Math.floor(copperAfterGold / 10);
  const copperAfterSilver = Math.floor(copperAfterGold % 10);
  const leftOver = Math.floor(copperAfterSilver % partyMembers);

  const displayBreakdown = () => {
    console.log(partyMembers);
    console.log(`Converted copper = ${convertedCopper}`);
    console.log(`Converted platinum = ${convertedPlatinum}`);
    console.log(`Copper remaining after platinum = ${copperAfterPlatinum}`);
    console.log(`Converted gold = ${convertedGold}`);
    console.log(`Copper remaining after gold = ${copperAfterGold}`);
    console.log(`Converted silver = ${convertedSilver}`);
    console.log(`Copper remaining after silver = ${copperAfterSilver}`);
    console.log(`remaining copper = ${leftOver}`);
  };

  const renderCashSplit = () => {
    return !hidden
      ? `Everybody gets ${convertedPlatinum} platinum, ${convertedGold} gold, ${convertedSilver} silver, and ${copperAfterSilver} copper, with ${leftOver} copper remaining.`
      : "";
  };

  return (
    <form>
      <div className="column">
        <div className="row">
          <label htmlFor="partyMembers">Number of Party Members:</label>
          <Field
            className="quantity"
            name="partyMembers"
            type="number"
            component="input"
          />
        </div>
        <div className="row">
          <label htmlFor="platinum">Platinum:</label>
          <Field
            className="quantity"
            name="platinum"
            type="number"
            component="input"
          />
        </div>
        <div className="row">
          <label htmlFor="gold">Gold:</label>
          <Field
            className="quantity"
            name="gold"
            type="number"
            component="input"
          />
        </div>
        <div className="row">
          <label htmlFor="electrum">Electrum:</label>
          <Field
            className="quantity"
            name="electrum"
            type="number"
            component="input"
          />
        </div>
        <div className="row">
          <label htmlFor="silver">Silver:</label>
          <Field
            className="quantity"
            name="silver"
            type="number"
            component="input"
          />
        </div>
        <div className="row">
          <label htmlFor="copper">Copper:</label>
          <Field
            className="quantity"
            name="copper"
            type="number"
            component="input"
          />
        </div>
      </div>

      <div className="column-70%">
        <div className="row"></div>
        <div className="row">
          <p key={1} className="divided-amount">
            {renderCashSplit()}
          </p>
          {/* <p className="divided-amount">{renderCashSplit()}</p> */}
        </div>
      </div>
      <div className="row">
        {/* <input className="button divide" type="button" value="Do the Thing" /> */}
        <input
          className="button reset"
          type="button"
          value="Reset"
          onClick={reset}
        />
      </div>
    </form>
  );
};

CurrencyForm = reduxForm({
  form: "my-currency-form",
  enableReinitialize: true
})(CurrencyForm);

const selector = formValueSelector("my-currency-form");

CurrencyForm = connect(state => {
  const {
    partyMembers,
    platinum,
    gold,
    electrum,
    silver,
    copper,
    convertedPlatinum,
    convertedGold,
    convertedSilver,
    convertedCopper,
    copperAfterPlatinum,
    copperAfterGold,
    copperAfterSilver,
    leftOver,
    hidden
  } = selector(
    state,
    "partyMembers",
    "platinum",
    "gold",
    "electrum",
    "silver",
    "copper",
    "convertedPlatinum",
    "convertedGold",
    "convertedSilver",
    "convertedCopper",
    "copperAfterPlatinum",
    "copperAfterGold",
    "copperAfterSilver",
    "leftOver",
    "hidden"
  );

  return {
    partyMembers: `${partyMembers || 1}`,
    platinum: `${platinum || 0}`,
    gold: `${gold || 0}`,
    electrum: `${electrum || 0}`,
    silver: `${silver || 0}`,
    copper: `${copper || 0}`,
    convertedPlatinum,
    convertedGold,
    convertedSilver,
    convertedCopper,
    copperAfterPlatinum,
    copperAfterGold,
    copperAfterSilver,
    leftOver,
    hidden
  };
})(CurrencyForm);

export default CurrencyForm;
