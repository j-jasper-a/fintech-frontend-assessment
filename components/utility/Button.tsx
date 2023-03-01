import Link from "next/link";

type Props = {
  title: string;
  link: string;
};

const Button = (props: Props) => {
  return (
    <Link
      className="h-9 w-32 rounded-lg bg-brand px-6 py-3 text-[11px] text-white"
      href={props.link}
    >
      {props.title}
    </Link>
  );
};

export default Button;
