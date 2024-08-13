/*
trans: date, type(d/w), amount, balance,localStorage, del trans, del all (Transcation.jsx)
   date: pd, nd (trans clears) - balance updated
   d: balance = balance + amount, w: balance = balance - amount
*/

"use client";

import { useState } from "react";

export default function Transaction() {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  // const [deposit, setDeposit] = useState("");
  // const [savings, setSavings] = useState("");
  const [amount, setAmount] = useState(null);
  return (
    <div>
      <form>
        <h1>Record your Transcations</h1>
        <h3>select an option: </h3>
        <label>
          <input
            type="radio"
            value="deposit"
            checked={optionOne === "deposit"}
            onChange={(e) => setOptionOne(e.target.value)}
          />
          Deposit
        </label>
        <label>
          <input
            type="radio"
            value="savings"
            checked={optionTwo === "savings"}
            onChange={(e) => setOptionTwo(e.target.value)}
          />
          Savings
        </label>
        <br />
        {optionOne && (
          <div>
            <h1>sond</h1>
          </div>
        )}
        <label>
          {" "}
          Enter Amount
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
