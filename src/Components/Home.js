import { connect } from "react-redux";
import { depositMoney, withdrawMoney } from "../ReduxState/Actions/actions";
import "./Home.css";

const Home = (props) => {
  const { amount } = props;
  const { depositMoney, withdrawMoney } = props;
  const disabled = true;
  return (
    <div className="container">
      <div className="top-container">
        <h1>COUNTER</h1>
      </div>
      <div className="middle-container">
        <div className="account-amount-value">
          {amount === 0 ? `${amount}00` : amount}
        </div>
      </div>
      <div className="bottom-container">
        <div className="deposit-amount">
          <button type="button" onClick={depositMoney}>
            Deposit
          </button>
        </div>
        <div className="withdraw-amount">
          <button
            disabled={amount === 0 ? disabled : ""}
            type="button"
            onClick={withdrawMoney}
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);
  return {
    // component will receive data from store as: props.amount
    amount: state.bankAccountReducer?.amount
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps", dispatch);
  return {
    // dispatching actions returned by action creators
    // Component will call: props.depositMoney, props.withdrawMoney for dispatching an action
    depositMoney: () => dispatch(depositMoney(100)),
    withdrawMoney: () => dispatch(withdrawMoney(100))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
