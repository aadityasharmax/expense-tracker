import TransactionItem from "../TransactionItem/TransactionItem";

const TransactionList = ({ transactions , setTransactions , setBalance}) => {
  return (
    <div className=" bg-[#1e293b] p-10 rounded-2xl overflow-y-auto ">
      <h3 className="text-2xl text-[#dfe5ec] text-center mb-5">
        Transaction History
      </h3>
      <ul>
        {transactions == 0 ? <div className="flex justify-center m-20 text-white font-light">No transactions</div> : transactions.map((tx) => (
          <TransactionItem key={tx.id} transaction={tx} setTransactions={setTransactions} setBalance={setBalance}/>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;