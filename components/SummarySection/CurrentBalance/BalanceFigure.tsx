import Image from "next/image";
import walletIcon from "@/public/assets/SummarySection/wallet-icon.svg";

const BalanceFigure = () => {
  return (
    <div className="flex gap-2">
      <Image className="w-14" src={walletIcon} alt="A wallet icon" />
      <div className="flex flex-col justify-between p-2">
        <p className="text-2xl font-bold">$55,000</p>
        <p className="text-[11px]">Total Expense</p>
      </div>
    </div>
  );
};

export default BalanceFigure;
