import { useUser } from "@auth0/nextjs-auth0";
import Avatar from "../../Avatar";
// @ts-ignore
import ChevronIcon from "./../../icons/outline/chevron-right.svg";
// @ts-ignore
import LogoutIcon from "./../../icons/outline/logout.svg";

const DropdownMenu = () => {
  const { user } = useUser();
  const DropdownItem = ({ children, leftIcon, rightIcon, href }) => {
    return (
      <a
        href={href}
        className="flex h-12 items-center p-2 rounded-xl hover:bg-gray-100 hover:text-red-400"
      >
        <span className="mr-4">{leftIcon}</span>
        {children}
        <span className="ml-auto">{rightIcon}</span>
      </a>
    );
  };

  return (
    <div className="absolute top-24 w-400 bg-gray-50 border rounded-lg overflow-hidden p-4 transform -translate-x-80">
      <DropdownItem
        leftIcon={<Avatar src={user.picture} className="h-8" />} href="#" rightIcon={false}
      >
        My Profile ({user.name})
      </DropdownItem>
      <DropdownItem
        leftIcon={<LogoutIcon className="h-8" />}
        rightIcon={<ChevronIcon className="h-8" />}
        href="/api/auth/logout"
      >
        Logout
      </DropdownItem>
    </div>
  );
};

export default DropdownMenu;
