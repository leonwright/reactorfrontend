import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { useRouter } from "next/router";
import Avatar from "./Avatar";
import { AlternateTextInput } from "./Input";
import { MenuItem, SideMenu } from "./SideMenu";
import { AdjustmentsIcons, CollectionIcon, GithubIcon, HomeIcon } from "./svgs";
import { TopMenu, TopMenuitem } from "./TopMenu";
import DropdownMenu from "./TopMenu/Dropdown/DropdownMenu";

const InnerLayout = ({ children, user }) => {
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
    <>
      <Head>
        <title>ReactorApp</title>
      </Head>
      <div className="h-screen flex">
        <SideMenu />
        <div className="w-full dark:bg-gray-800">
          <TopMenu>
            <TopMenuitem icon={<Avatar src={user.picture} className="h-12" />}>
              <DropdownMenu />
            </TopMenuitem>
          </TopMenu>
          <div className="p-4 px-10">{children}</div>
        </div>
      </div>
    </>
  );
};

export default InnerLayout;
