import {
  HomeCategoryIcon,
  GamesCategoryIcon,
  GasCategoryIcon,
  PapersCategoryIcon,
  SecurityCategoryIcon,
  ServicesCategoryIcon,
  ShopsCategoryIcon,
  TravelCategoryIcon,
  VideosCategoryIcon,
  FoodCategoryIcon,
  TuitionCategoryIcon,
} from "@/components/utility/CategoryIcons";
import H2 from "@/components/utility/H2";
import Separator from "@/components/utility/Separator";
import Link from "next/link";

type Category = {
  icon: JSX.Element;
  title: string;
  link: string;
};

type CategoryItemProps = {
  category: Category;
};

const categories: Category[] = [
  { icon: <HomeCategoryIcon isSmall={false} />, title: "Home", link: "/" },
  { icon: <GasCategoryIcon isSmall={false} />, title: "Gas", link: "/" },
  {
    icon: <SecurityCategoryIcon isSmall={false} />,
    title: "Security",
    link: "/",
  },
  { icon: <VideosCategoryIcon isSmall={false} />, title: "Videos", link: "/" },
  { icon: <GamesCategoryIcon isSmall={false} />, title: "Games", link: "/" },
  { icon: <PapersCategoryIcon isSmall={false} />, title: "Papers", link: "/" },
  { icon: <ShopsCategoryIcon isSmall={false} />, title: "Shops", link: "/" },
  { icon: <TravelCategoryIcon isSmall={false} />, title: "Travel", link: "/" },
  {
    icon: <ServicesCategoryIcon isSmall={false} />,
    title: "Services",
    link: "/",
  },
  {
    icon: <FoodCategoryIcon isSmall={false} />,
    title: "Food",
    link: "/",
  },
  {
    icon: <TuitionCategoryIcon isSmall={false} />,
    title: "Tuition",
    link: "/",
  },
];

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { icon, title, link } = category;

  return (
    <Link href={link}>
      <div className="flex aspect-square flex-col items-center justify-between rounded-xl bg-light p-4">
        {icon}
        <p className="text-[11px]">{title}</p>
      </div>
    </Link>
  );
};

const Categories = () => {
  return (
    <div className="scroll-container z-10 flex h-[400px] w-[356px] flex-col gap-4 rounded-xl bg-white p-6">
      <H2 title="Categories" />
      <Separator />
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryItem key={category.title} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
