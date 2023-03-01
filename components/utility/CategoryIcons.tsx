import {
  Home,
  Video,
  Game,
  Paper,
  Buy,
  Image2,
  ShieldDone,
  Swap,
  Filter2,
  Bag,
  Bookmark,
} from "react-iconly";

type Props = {
  className?: string;
  isSmall: boolean;
};

export const HomeCategoryIcon = (props: Props) => {
  return (
    <div
      className={`${
        props.isSmall ? "w-5" : "w-9"
      } flex aspect-square items-center justify-center rounded-full bg-home`}
    >
      <Home
        set="curved"
        size={props.isSmall ? 10 : 16}
        primaryColor="white"
        label="Home icon"
      />
    </div>
  );
};

export const GasCategoryIcon = (props: Props) => {
  return (
    <div
      className={`${
        props.isSmall ? "w-5" : "w-9"
      } flex aspect-square  items-center justify-center rounded-full bg-gas`}
    >
      <Filter2
        set="curved"
        size={props.isSmall ? 10 : 16}
        primaryColor="white"
        label="Gas icon"
      />
    </div>
  );
};

export const SecurityCategoryIcon = (props: Props) => {
  return (
    <div
      className={`${
        props.isSmall ? "w-5" : "w-9"
      } flex aspect-square  items-center justify-center rounded-full bg-security`}
    >
      <ShieldDone
        set="curved"
        size={props.isSmall ? 10 : 16}
        primaryColor="white"
        label="Security icon"
      />
    </div>
  );
};

export const VideosCategoryIcon = (props: Props) => {
  return (
    <div
      className={`${
        props.isSmall ? "w-5" : "w-9"
      } flex aspect-square  items-center justify-center rounded-full bg-videos`}
    >
      <Video
        set="curved"
        size={props.isSmall ? 10 : 16}
        primaryColor="white"
        label="Videos icon"
      />
    </div>
  );
};

export const GamesCategoryIcon = (props: Props) => {
  return (
    <div
      className={`${
        props.isSmall ? "w-5" : "w-9"
      } flex aspect-square  items-center justify-center rounded-full bg-games`}
    >
      <Game
        set="curved"
        size={props.isSmall ? 10 : 16}
        primaryColor="white"
        label="Games icon"
      />
    </div>
  );
};

export const PapersCategoryIcon = (props: Props) => {
  return (
    <div
      className={`${
        props.isSmall ? "w-5" : "w-9"
      } flex aspect-square  items-center justify-center rounded-full bg-papers`}
    >
      <Paper
        set="curved"
        size={props.isSmall ? 10 : 16}
        primaryColor="white"
        label="Papers icon"
      />
    </div>
  );
};

export const ShopsCategoryIcon = (props: Props) => {
  return (
    <div
      className={`${
        props.isSmall ? "w-5" : "w-9"
      } flex aspect-square  items-center justify-center rounded-full bg-shops`}
    >
      <Buy
        set="curved"
        size={props.isSmall ? 10 : 16}
        primaryColor="white"
        label="Shops icon"
      />
    </div>
  );
};

export const TravelCategoryIcon = (props: Props) => {
  return (
    <div
      className={`${
        props.isSmall ? "w-5" : "w-9"
      } flex aspect-square  items-center justify-center rounded-full bg-travel`}
    >
      <Image2
        set="curved"
        size={props.isSmall ? 10 : 16}
        primaryColor="white"
        label="Travel icon"
      />
    </div>
  );
};

export const ServicesCategoryIcon = (props: Props) => {
  return (
    <div
      className={`${
        props.isSmall ? "w-5" : "w-9"
      } flex aspect-square  items-center justify-center rounded-full bg-service`}
    >
      <Swap
        set="curved"
        size={props.isSmall ? 10 : 16}
        primaryColor="white"
        label="Services icon"
      />
    </div>
  );
};

export const FoodCategoryIcon = (props: Props) => {
  return (
    <div
      className={`${
        props.isSmall ? "w-5" : "w-9"
      } flex aspect-square  items-center justify-center rounded-full bg-food`}
    >
      <Bag
        set="curved"
        size={props.isSmall ? 10 : 16}
        primaryColor="white"
        label="Food icon"
      />
    </div>
  );
};

export const TuitionCategoryIcon = (props: Props) => {
  return (
    <div
      className={`${
        props.isSmall ? "w-5" : "w-9"
      } flex aspect-square  items-center justify-center rounded-full bg-tuition`}
    >
      <Bookmark
        set="curved"
        size={props.isSmall ? 10 : 16}
        primaryColor="white"
        label="Tuition icon"
      />
    </div>
  );
};
