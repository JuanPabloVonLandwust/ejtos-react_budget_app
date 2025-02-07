import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const ExpenseItem = (props) => {
  const { currency, dispatch } = useContext(AppContext);
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  const increseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td style={{textAlign: "center"}}>
        <FaPlusCircle
          size="2.2em"
          color="green"
          onClick={(event) => increseAllocation(props.name)}
        ></FaPlusCircle>
      </td>
      <td style={{textAlign: "center"}}>
        <FaMinusCircle
          size="2.2em"
          color="red"
          onClick={(e) => decreaseAllocation(props.name)}
        ></FaMinusCircle>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
