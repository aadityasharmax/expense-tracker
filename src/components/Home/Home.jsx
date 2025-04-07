import React, { useState, useEffect } from "react";
import Balance from "../Balance/Balance.jsx";
import AddTransaction from "../AddTransaction/AddTransaction.jsx";
import TransactionList from "../TransactionList/TransactionList.jsx";

const Home = () => {
  const [balance, setBalance] = useState(() => {
    const stored = localStorage.getItem("balance");
    return stored ? JSON.parse(stored) : 0;
  });

  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [transactions, balance]);

  return (
    <div className="bg-[#0f172a] min-h-screen p-2">
      <h1 className="text-[#f8fafc] text-center text-4xl pt-10 ">
        Expense Tracker
      </h1>
      <Balance balance={balance} />
      <div className="flex flex-wrap gap-5 justify-center mt-20  p-3">
        <AddTransaction
          balance={balance}
          setBalance={setBalance}
          setTransactions={setTransactions}
        />
        <TransactionList
          transactions={transactions}
          setTransactions={setTransactions}
          setBalance={setBalance}
        />
      </div>
    </div>
  );
};

export default Home;
