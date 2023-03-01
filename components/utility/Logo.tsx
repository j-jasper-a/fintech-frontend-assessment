import Link from "next/link";
import logo from "@/public/assets/logo.svg";
import Image from "next/image";

type Props = {
  className?: string;
};

const Logo = (props: Props) => {
  return (
    <Link className={props.className} href={"/"}>
      <Image src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;
