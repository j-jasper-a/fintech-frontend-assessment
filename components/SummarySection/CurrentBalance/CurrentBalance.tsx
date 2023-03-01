import H3 from "@/components/utility/H3";
import balanceCardDecoration from "@/public/assets/SummarySection/balance-card-decoration.svg";
import Image from "next/image";
import BalanceFigure from "./BalanceFigure";

const CurrentBalance = () => {
  return (
    <div className="flex h-32 justify-between overflow-hidden rounded-xl bg-brand drop-shadow">
      <div className="flex flex-col justify-between py-4 px-6 text-xs">
        <H3 title="Current Balance" isSpecial={false} />
        <BalanceFigure />
      </div>
      <Image src={balanceCardDecoration} alt="A card decoration" />
    </div>
  );
};

export default CurrentBalance;
