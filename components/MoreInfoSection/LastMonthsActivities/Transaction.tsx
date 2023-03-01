type Props = {
  categoryIcon: JSX.Element;
  categoryName: string;
  status: string;
  date: string;
  amount: string;
};

const Transaction = (props: Props) => {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr]">
      <div className="flex items-center gap-4 py-4">
        {props.categoryIcon} <p className="font-medium">{props.categoryName}</p>
      </div>
      <p className="self-center py-4 text-green">{props.status}</p>
      <p className="self-center py-4">{props.date}</p>
      <p className="self-center py-4 font-medium">{props.amount}</p>
    </div>
  );
};

export default Transaction;
