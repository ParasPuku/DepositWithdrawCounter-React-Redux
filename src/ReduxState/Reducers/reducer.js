import * as actionType from "../ActionTypes/constants";

const INITIAL_STATE = {
  amount: 0
};

const bankAccountReducer = (state = INITIAL_STATE, action) => {
  console.log("REDUCER", action);
  switch (action.type) {
    case actionType.DEPOSIT_MONEY:
      return {
        ...state,
        amount: state.amount + action.payload
      };
    case actionType.WITHDRAW_MONEY:
      return {
        ...state,
        amount: state.amount - action.payload
      };
    default:
      return state;
  }
};
export default bankAccountReducer;
