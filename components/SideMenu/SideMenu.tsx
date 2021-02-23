import { useRouter } from "next/router";
import { MenuItem } from "./index";
import { AdjustmentsIcons, CollectionIcon, HomeIcon } from "./../svgs";

const SideMenu = () => {
  const router = useRouter();
  const items = [
    {
      text: "Home",
      icon: <HomeIcon className="h-8" />,
      href: "/",
    },
    {
      text: "Apps",
      icon: <CollectionIcon className="h-8" />,
      href: "/apps",
    },
    {
      text: "Settings",
      icon: <AdjustmentsIcons className="h-8" />,
      href: "/settings",
    },
  ];

  return (
    <div className="md:w-80 bg-white dark:bg-gray-800">
      <div className="h-32 flex justify-center items-center text-2xl font-bold dark:text-white">
        Reactor<span className="text-red-500">App</span>
      </div>
      <div>
        {items.map((item) => {
          return (
            <MenuItem
              key={item.text}
              isActive={router.pathname == item.href ? true : false}
              icon={item.icon}
              href={item.href}
            >
              {item.text}
            </MenuItem>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;
