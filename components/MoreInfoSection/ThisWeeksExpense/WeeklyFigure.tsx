import {
  GasCategoryIcon,
  HomeCategoryIcon,
  TravelCategoryIcon,
} from "@/components/utility/CategoryIcons";
import H2 from "@/components/utility/H2";

const WeeklyFigure = () => {
  return (
    <div className="mb-8 flex w-72 justify-between">
      <div className="flex flex-col gap-2">
        <H2 title="This Week's Expense" />
        <div className="flex gap-1">
          <GasCategoryIcon isSmall={true} />
          <HomeCategoryIcon isSmall={true} />
          <TravelCategoryIcon isSmall={true} />
        </div>
      </div>
      <div className="rounded-lg bg-white px-4 py-2">
        <p className="text-2xl font-medium">$540</p>
        <p className="text-[9px] text-dark">Total Expense</p>
      </div>
    </div>
  );
};

export default WeeklyFigure;
