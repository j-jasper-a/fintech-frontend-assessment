type Props = {
  title: string;
  isSpecial: boolean;
};

const H3 = (props: Props) => {
  return (
    <p
      className={`${
        props.isSpecial ? "text-red" : ""
      } text-[11px] font-medium uppercase tracking-[1px]`}
    >
      {props.title}
    </p>
  );
};

export default H3;
