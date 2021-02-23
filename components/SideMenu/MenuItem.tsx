import { GithubIcon } from "../svgs";
import Link from "next/link";

const MenuItem = ({ children, isActive, icon, href }) => {
  const activeColor = "text-red-500";
  const activeBg = "bg-red-100";
  return (
    <Link href={href}>
      <a>
        <div
          className={`my-8 flex items-center ${isActive ? activeColor : ""}`}
        >
          <div
            className={`pl-6 pr-8 py-3 rounded-full rounded-l-none ${
              isActive ? activeBg : ""
            }`}
          >
            {icon}
          </div>
          <div className="ml-7 h-full w-full text-sm">{children}</div>
        </div>
      </a>
    </Link>
  );
};

export default MenuItem;
