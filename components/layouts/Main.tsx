import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Main = (props: Props) => {
  return (
    <main
      className={`${props.className} scroll-container mx-auto h-screen max-w-screen-xl bg-light`}
    >
      {props.children}
    </main>
  );
};

export default Main;
