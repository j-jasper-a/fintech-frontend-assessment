type Props = {
  className?: string;
};

const Separator = (props: Props) => {
  return <hr className={`${props.className} border-gray`} />;
};

export default Separator;
