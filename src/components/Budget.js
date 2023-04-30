import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, expenses, dispatch } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
  const changeBudget = (val) => {
    if (val > 20000) {
      alert(`You cannot increase the budget value higher than £20000`);
      return;
    }
    if (val < totalExpenses) {
      alert("You cannot reduce the budget value lower than the expending");
      return;
    }
    dispatch({
      type: "SET_BUDGET",
      payload: val,
    });
  };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        <input
          type="number"
          id="budget"
          step="10"
          value={budget}
          onChange={(e) => changeBudget(e.target.value)}
        />
      </span>
    </div>
  );
};

export default Budget;
