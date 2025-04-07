import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./AddTransaction.css";

const AddTransaction = ({ balance, setBalance, setTransactions }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!amount || !description) {
      alert("Please fill in both fields");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description: description,
      amount: parseFloat(amount),
    };

    setTransactions((prev) => [newTransaction, ...prev]);
    setBalance((prev) => prev + newTransaction.amount);

    setAmount("");
    setDescription("");
  };

  const handleSub = () => {
    if (!amount || !description) {
      alert("Please fill in both fields");
      return;
    }

    const value = parseFloat(amount);
    if (isNaN(value) || value <= 0) {
      alert("Please enter a valid positive amount");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description: description,
      amount: -Math.abs(value),
    };

    setTransactions((prev) => [newTransaction, ...prev]);
    setBalance((prev) => prev + newTransaction.amount);
    setAmount("");
    setDescription("");
  };
  return (
    <div className="bg-[#1e293b] p-3  rounded-2xl  sm:w-[380px]">
      <h1 className="text-2xl text-[#dfe5ec] text-center mb-5">
        Add Transaction
      </h1>
      <div className="flex flex-col mb-2">
        <label className="label">Amount</label>
        <input
          name="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label className="label">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="amount"
          className="input-field"
        />
      </div>
      <div className="text-white flex justify-center mt-10 gap-10 text-3xl ">
        <FaPlus
          className="cursor-pointer hover:text-green-600"
          onClick={handleAdd}
        />
        <FaMinus
          className="cursor-pointer hover:text-red-600"
          onClick={handleSub}
        />
      </div>
    </div>
  );
};

export default AddTransaction;
