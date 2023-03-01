import Link from "next/link";
import {
  Category,
  Star,
  Paper,
  Chart,
  Ticket,
  Setting,
  Logout,
} from "react-iconly";

const SideNavigation = () => {
  return (
    <nav className="mt-12 flex h-full w-full flex-col justify-between px-2 py-8">
      <ul className="flex flex-col gap-4">
        <li>
          <Link href={"/"}>
            <div className="flex aspect-square items-center justify-center rounded-full bg-brand">
              <Category
                set="curved"
                size={16}
                primaryColor="white"
                label="Category icon"
              />
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <div className="flex aspect-square items-center justify-center rounded-full bg-transparent">
              <Star
                set="curved"
                size={16}
                primaryColor="black"
                label="Star icon"
              />
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <div className="flex aspect-square items-center justify-center rounded-full bg-transparent">
              <Paper
                set="curved"
                size={16}
                primaryColor="black"
                label="Paper icon"
              />
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <div className="flex aspect-square items-center justify-center rounded-full bg-transparent">
              <Chart
                set="curved"
                size={16}
                primaryColor="black"
                label="Chart icon"
              />
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <div className="flex aspect-square items-center justify-center rounded-full bg-transparent">
              <Ticket
                set="curved"
                size={16}
                primaryColor="black"
                label="Ticket icon"
              />
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <div className="flex aspect-square items-center justify-center rounded-full bg-transparent">
              <Setting
                set="curved"
                size={16}
                primaryColor="black"
                label="Setting icon"
              />
            </div>
          </Link>
        </li>
      </ul>
      <Link href={"/"}>
        <div className="flex aspect-square rotate-180 items-center justify-center rounded-full bg-dark">
          <Logout
            set="curved"
            size={16}
            primaryColor="white"
            label="Logout icon"
          />
        </div>
      </Link>
    </nav>
  );
};

export default SideNavigation;
