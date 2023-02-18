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
      link: "/menus/Dinner-Menu.pdf",
    },
    {
      name: "Lunch/Brunch Menu",
      image: "/images/menus/Brunch-Menu.png",
      link: "/menus/Brunch-Menu.pdf",
    },
    {
      name: "Dessert Menu",
      image: "/images/menus/Dessert-Menu.png",
      link: "/menus/Dessert-Menu.pdf",
    },
    {
      name: "Kids Menu",
      image: "/images/menus/Kids-Menu.png",
      link: "/menus/Kids-Menu.pdf",
    },
    {
      name: "Lunch/Brunch Set Menu",
      image: "/images/menus/Lunch-Set-Menu.png",
      link: "/menus/Lunch-Set-Menu.pdf",
    },
    {
      name: "Dinner Set Menu",
      image: "/images/menus/Dinner-Set-Menu.png",
      link: "/menus/Dinner-Set-Menu.pdf",
    },
  ];
  return (
    <div
      id="menu"
      className="py-20 font-divlayfair flex w-full flex-col items-center bg-navyBlue px-16 text-center text-white sm:px-60"
    >
      <p className="mb-5 font-playfair text-4xl">Menus</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
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
      <div className="p-4 flex flex-col items-center rounded-xl transition-all hover:scale-110">
        <Image
          src={menuData.image}
          alt={menuData.name}
          width={200}
          height={200}
          className="h-64 w-64 object-cover"
        />
        <p>{menuData.name}</p>
      </div>
    </Link>
  );
}
