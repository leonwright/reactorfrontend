import { AlternateTextInput } from "../Input";
import Avatar from "../Avatar";

const TopMenu = ({ children }) => {
  return (
    <div className="bg-white h-28 flex items-center px-10 justify-between dark:bg-gray-800">
      <div className="w-1/4">
        <AlternateTextInput placeholder="Search..." type="text" className={null} />
      </div>
      <ul className="">{children}</ul>
    </div>
  );
};

export default TopMenu;
