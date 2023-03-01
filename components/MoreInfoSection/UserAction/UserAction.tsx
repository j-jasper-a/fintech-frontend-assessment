import Button from "@/components/utility/Button";
import { ChevronDownCircle } from "react-iconly";
import UserAvatar from "./UserAvatar";

type Props = {
  className?: string;
};

const UserAction = (props: Props) => {
  return (
    <div className={`${props.className} z-10 flex items-center gap-8 self-end`}>
      <Button title="+ Add Expense" link="/" />
      <div className="flex items-center gap-2">
        <UserAvatar />
        <ChevronDownCircle
          set="curved"
          size={22}
          primaryColor="black"
          label="Travel icon"
        />
      </div>
    </div>
  );
};

export default UserAction;
