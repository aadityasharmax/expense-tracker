import { MdDelete } from "react-icons/md";

const TransactionItem = ({ transaction , setTransactions , setBalance }) => {

  const handleDelete = () => {
    setTransactions((prev) => prev.filter((item) => item.id !== transaction.id));
    setBalance((prev) => prev - transaction.amount);
  };


  const sign = transaction.amount < 0 ? "-" : "+";
  const amountStyle =
    transaction.amount < 0 ? "text-red-500" : "text-green-500";

  return (
    <>
    <li className="flex gap-6 bg-slate-800 p-2 rounded mb-2 shadow">
      <span className="text-white text-xl font-bold">{transaction.description}</span>
      <span className={`${amountStyle} text-xl font-bold`}>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
      <MdDelete className="text-2xl text-red-600 cursor-pointer"  onClick={handleDelete}/>
    </li>
    </>
  );
};

export default TransactionItem;