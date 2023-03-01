import CurrentBalance from "./CurrentBalance/CurrentBalance";
import LatestActivity from "./LatestActivity/LatestActivity";
import UserInfo from "./UserInfo/UserInfo";

const SummarySection = () => {
  return (
    <section className="flex h-screen w-80 shrink-0 flex-col items-center border-r-[1px] border-gray bg-brand-light px-4">
      <UserInfo />
      <CurrentBalance />
      <LatestActivity />
    </section>
  );
};

export default SummarySection;
