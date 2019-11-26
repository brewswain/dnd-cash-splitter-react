import { combineReducers } from "redux";

import currencyReducer from "./currency/currency.reducer";
import { reducer as reduxFormReducer } from "redux-form";

export default combineReducers({
  currency: currencyReducer,
  form: reduxFormReducer
});
