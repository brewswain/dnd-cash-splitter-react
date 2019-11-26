import CurrencyActionTypes from "./currency.types";

const INITIAL_STATE = {
  hidden: true
};

const currencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrencyActionTypes.TOGGLE_CURRENCY_HIDDEN:
      return {
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default currencyReducer;
