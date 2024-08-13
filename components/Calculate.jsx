"use client";

import { useState } from "react";
import Balance from "./Balance";

const Calculate = () => {
  const [monthlySalary, setMonthlySalary] = useState("");
  const [weeklySalary, setWeeklySalary] = useState(null);
  const [savings, setSavings] = useState(null);

  const handleBtn = (e) => {
    e.preventDefault();
    const monthly = +monthlySalary;
    const ws = 0.25 * monthly;
    const savingsValue = 0.3 * ws;
    setWeeklySalary(ws);
    setSavings(savingsValue);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <Balance balance={savings} />
      <form className="space-y-4">
        <div>
          <label className="block text-lg font-semibold mb-2">
            Enter your Monthly Salary:
          </label>
          <input
            type="text"
            value={monthlySalary}
            onChange={(e) => setMonthlySalary(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          onClick={handleBtn}
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
      {weeklySalary !== null && (
        <div className="mt-4 p-4 border-t border-gray-300">
          <p className="text-lg font-medium">
            Weekly Salary: <span className="font-normal">${weeklySalary}</span>
          </p>
          <p className="text-lg font-medium">
            {" "}
            Weekly Savings: <span className="font-normal">${savings}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Calculate;
