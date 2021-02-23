import { PrimaryButton } from "./Button";
// @ts-ignore
import ArrowRight from "./icons/outline/arrow-right.svg";
// @ts-ignore
import ReactIcon from "../components/icons/brand/react.svg";
import { useRouter } from "next/router";

export const Panel = ({ children, className }: {children: any, className?: string}) => (
  <div className={`dark:text-white w-full ${className}`}>{children}</div>
);

export const ApplicationsPanel = ({className}: {className?: string}) => {
  const router = useRouter();
  return (
    <Panel>
      <div className={`flex justify-between items-center text-2xl font-bold h-10 ${className}`}>
        Applications{" "}
        <PrimaryButton
          onClick={() => {
            router.push("/apps/new");
          }}
          className={null}
        >
          Create new App
        </PrimaryButton>
      </div>
      <PanelItemContainer>
        <ApplicationItem />
      </PanelItemContainer>
      <PanelItemContainer>
        <ApplicationItem />
      </PanelItemContainer>
    </Panel>
  );
};

export const BuildsPanel = ({}) => {
  return (
    <Panel>
      <div className="flex justify-between font-bold text-2xl items-center h-10">
        Latest Builds
      </div>
      <PanelItemContainer>
        <BuildItem siteName="reactorapp.nerderbur.tech" completed={false} failed={false} />
      </PanelItemContainer>
      <PanelItemContainer>
        <BuildItem siteName="reactorapp.nerderbur.tech" completed={true} />
      </PanelItemContainer>
      <PanelItemContainer>
        <BuildItem siteName="reactorapp.nerderbur.tech" failed={true} />
      </PanelItemContainer>
    </Panel>
  );
};

export const PanelItemContainer = ({ children }) => (
  <div className="border border-gray-100 my-5 rounded-xl p-5 flex items-center hover:bg-gray-100 cursor-pointer">
    {children}
  </div>
);

export const ApplicationItem = () => {
  return (
    <>
      <img src="app.png" className="h-24 rounded mr-10" />
        <div>
          <div className="text-lg font-bold lowercase">
            reactorapp.nerderbur.tech
          </div>
          <div className="text-sm text-gray-400">
            Deploys from{" "}
            <a href="#" className="underline">
              Github
            </a>
            <ReactIcon className="h-8" />
          </div>
        </div>
        <ArrowRight className="text-black h-5 ml-auto" />
      </>
  )
}

export const BuildItem = ({siteName, completed, failed}: {siteName: string, completed?: boolean, failed?: boolean}) => {
  return (
    <>
    <div>
          <div className="text-lg font-bold lowercase">
            {siteName}
          <span className={`ml-2 ${(!completed && !failed) ? "text-gray-400" : null} ${(completed && !failed) ? "text-green-400" : null} ${(!completed && failed) ? "text-red-400" : null}`}>
            {(!completed && !failed) ? "build running" : null}
            {(completed && !failed) ? "completed" : null}
            {(!completed && failed) ? "failed": null}
          </span>
          </div>
          <div className="text-sm text-gray-400">
            Develoopment master@
            <a href="#" className="underline">
              45ser32
            </a>
          </div>
        </div>
        <ArrowRight className="text-black h-5 ml-auto" />
    </>
  )
}
