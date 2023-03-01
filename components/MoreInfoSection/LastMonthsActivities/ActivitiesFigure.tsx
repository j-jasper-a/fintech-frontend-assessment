import {
  HomeCategoryIcon,
  ShopsCategoryIcon,
  ServicesCategoryIcon,
} from "@/components/utility/CategoryIcons";
import Transaction from "./Transaction";

const lastMonthsActivitiesData = [
  {
    categoryIcon: <HomeCategoryIcon isSmall={false} />,
    categoryName: "Home Electricity Bill",
    status: "Successful",
    date: "27/10/2021",
    amount: "$540",
  },
  {
    categoryIcon: <ShopsCategoryIcon isSmall={false} />,
    categoryName: "Festival Shopping",
    status: "Successful",
    date: "27/10/2021",
    amount: "$540",
  },
  {
    categoryIcon: <ServicesCategoryIcon isSmall={false} />,
    categoryName: "Car Services",
    status: "Successful",
    date: "27/10/2021",
    amount: "$540",
  },
];

const ActivitiesFigure = () => {
  return (
    <div>
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] text-[11px] font-medium text-black/50">
        <p>Categories Names</p>
        <p>Transactions</p>
        <p>Date</p>
        <p>Amount</p>
      </div>
      {lastMonthsActivitiesData.map((activity) => (
        <Transaction
          key={activity.categoryName}
          categoryIcon={activity.categoryIcon}
          categoryName={activity.categoryName}
          date={activity.date}
          amount={activity.amount}
          status={activity.status}
        />
      ))}
    </div>
  );
};

export default ActivitiesFigure;
