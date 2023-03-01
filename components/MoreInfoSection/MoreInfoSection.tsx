import Categories from "./Categories/Categories";
import LastMonthsActivities from "./LastMonthsActivities/LastMonthsActivities";
import ThisWeeksExpense from "./ThisWeeksExpense/ThisWeeksExpense";
import UserAction from "./UserAction/UserAction";
import moreInfoSectionDecoration from "@/public/assets/MoreInfoSection/more-info-section-decoration.svg";
import Image from "next/image";

const MoreInfoSection = () => {
  return (
    <div className="relative flex w-[960px] flex-col justify-between p-8">
      <UserAction />
      <div className="flex justify-between">
        <ThisWeeksExpense />
        <Categories />
      </div>
      <LastMonthsActivities />
      <Image
        className="absolute bottom-0 right-0"
        src={moreInfoSectionDecoration}
        alt="Decoration"
      />
    </div>
  );
};

export default MoreInfoSection;
