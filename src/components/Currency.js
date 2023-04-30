import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };
  return (
    <div className="alert alert-secondary">
      <label style={{ background: "lightgreen", color: "white" }}>
        Currency
        <select
          name="Currency"
          id="Currency"
          style={{ background: "lightgreen", border: 0, color: "white"}}
          onChange={(e) => changeCurrency(e.target.value)}
        >
          <option value="$" style={{color: "black"}}>$ Dollar</option>
          <option value="£" style={{color: "black"}}>£ Pound</option>
          <option value="€" style={{color: "black"}}>€ Euro</option>
          <option value="₹" style={{color: "black"}}>₹ Ruppee</option>
        </select>
      </label>
    </div>
  );
};

export default Currency;
