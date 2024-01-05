import Image from "next/image";
import Link from "next/link";

type Menu = {
  name: string;
  image: string;
  link: string;
};
export default function MenuSection() {
  const menus: Menu[] = [
    {
      name: "Dinner Menu",
      image: "/images/menus/Dinner-Menu.png",
      link: "/menus/Dinner Menu.pdf",
    },
    {
      name: "Weekday Breakfast & Lunch Menu",
      image: "/images/menus/Brunch-Menu.png",
      link: "/menus/Breakfast Lunch Menu.pdf",
    },
    {
      name: "Dessert Menu",
      image: "/images/menus/Dessert-Menu.png",
      link: "/menus/Dessert.pdf",
    },
    {
      name: "Kids Menu",
      image: "/images/menus/Kids-Menu.png",
      link: "/menus/Kids-Menu.pdf",
    },
    {
      name: "Snack Menu",
      image: "/images/menus/Lunch-Set-Menu.png",
      link: "/menus/Snack.pdf",
    },
    {
      name: "Residence Menu",
      image: "/images/menus/Dinner-Set-Menu.png",
      link: "/menus/Residence.pdf",
    },
  ];
  return (
    <div
      id="menu"
      className="flex flex-col items-center w-full px-16 py-20 text-center text-white font-divlayfair bg-navyBlue sm:px-60"
    >
      <p className="mb-5 text-4xl font-playfair">Menus</p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {menus.map((menu) => (
          <MenuCard key={menu.link} menuData={menu} />
        ))}
      </div>
    </div>
  );
}

type MenuCardProps = {
  menuData: Menu;
};
function MenuCard({ menuData }: MenuCardProps) {
  return (
    <Link passHref href={menuData.link}>
      <div className="flex flex-col items-center p-4 transition-all rounded-xl hover:scale-110">
        <Image
          src={menuData.image}
          alt={menuData.name}
          width={200}
          height={200}
          className="object-cover w-64 h-64"
        />
        <p>{menuData.name}</p>
      </div>
    </Link>
  );
}
