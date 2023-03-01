import H2 from "@/components/utility/H2";
import Separator from "@/components/utility/Separator";
import Link from "next/link";
import ActivitiesFigure from "./ActivitiesFigure";

const LastMonthsActivities = () => {
  return (
    <div className="z-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <H2 title="Last Month's Activities" />
          <p
            className="text-[9px] text-black/40
          "
          >
            Monthly Activities
          </p>
        </div>
        <Link href={"/"}>
          <p className="text-[11px] font-medium">View All</p>
        </Link>
      </div>
      <Separator className="my-4" />
      <ActivitiesFigure />
    </div>
  );
};

export default LastMonthsActivities;
