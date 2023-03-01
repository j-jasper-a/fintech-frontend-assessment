import Logo from "../utility/Logo";
import SideNavigation from "./SideNavigation/SideNavigation";

const SideBar = () => {
  return (
    <div className="flex h-screen w-20 shrink-0 flex-col items-center border-r-[1px] border-r-gray bg-brand-light px-2">
      <Logo className="mt-8" />
      <SideNavigation />
    </div>
  );
};

export default SideBar;
