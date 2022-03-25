import * as actionType from "../ActionTypes/constants";

export const depositMoney = (data) => {
  console.log("DEPOSIT ACTIONS", data);
  return {
    type: actionType.DEPOSIT_MONEY,
    payload: data
  };
};

export const withdrawMoney = (data) => {
  console.log("WITHDRAW ACTIONS", data);
  return {
    type: actionType.WITHDRAW_MONEY,
    payload: data
  };
};
