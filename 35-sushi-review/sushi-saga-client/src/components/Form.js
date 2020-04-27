import React from "react";

const Form = ({ amount, handleOnChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input
      type="number"
      name="amount"
      placeholder="topup"
      value={amount}
      onChange={handleOnChange}
    />
    <input type="submit" />
  </form>
);

export default Form;
