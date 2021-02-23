import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { useState } from "react";

const TopMenuitem = ({ icon, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="cursor-pointer" onClick={() => setOpen(!open)}>
      {icon}
      {open && children}
    </li>
  );
};

export default TopMenuitem;
