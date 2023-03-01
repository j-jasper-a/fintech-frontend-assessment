type Props = {
  title: string;
};

const H2 = (props: Props) => {
  return <p className="font-medium">{props.title}</p>;
};

export default H2;
