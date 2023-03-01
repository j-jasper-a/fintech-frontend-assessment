import userAvatar from "@/public/assets/MoreInfoSection/user-avatar.jpg";
import Image from "next/image";

const UserAvatar = () => {
  return (
    <div className="h-auto w-14 overflow-hidden rounded-full">
      <Image src={userAvatar} alt="User avatar" />
    </div>
  );
};

export default UserAvatar;
