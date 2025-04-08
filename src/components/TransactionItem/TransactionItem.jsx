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
    <li className="flex gap-6 justify-between p-2 rounded mb-2">
      <span className="text-white text-sm  text-wrap md:text-xl ">{transaction.description}</span>
      <span className={`${amountStyle} text-sm  text-wrap md:text-xl`}>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
      <MdDelete className="text-xl text-red-600 cursor-pointer md:text-2xl"   onClick={handleDelete}/>
    </li>
    </>
  );
};

export default TransactionItem;