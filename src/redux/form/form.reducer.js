const INITIAL_STATE = {
  partyMembers: 0,
  platinum: 0,
  gold: 0,
  electrum: 0,
  silver: 0,
  copper: 0
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default formReducer;
