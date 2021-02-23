import { useRouter } from "next/router";
import InnerLayout from "../../components/InnerLayout";
// @ts-ignore
import ArrowLeft from "../../components/icons/outline/arrow-left.svg";
// @ts-ignore
import GithubIcon from "../../components/icons/brand/github.svg";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import { ApplicationsPanel, Panel } from "../../components/Panel";

const NewPage = () => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <InnerLayout>
      <button
        className="flex items-center hover:opacity-50"
        onClick={() => {
          router.back();
        }}
      >
        <ArrowLeft className="h-5 mr-5" /> Back
      </button>
      <div>
        <Panel className="mt-5">
          <div className="flex justify-between font-bold text-2xl items-center h-10">
            Create Application
          </div>
          <div>
            <button
              type="button"
              className="flex items-center text-white bg-gray-800 transform hover:-translate-y-1 transition-all p-4 rounded-3xl mt-4"
              onClick={() => {
                window.location.href = "http://google.com";
              }}
            >
              <GithubIcon className="h-6 mr-4 font-semibold fill-current" />
              Connect Github
            </button>
          </div>
        </Panel>
      </div>
    </InnerLayout>
  );
};

export default withPageAuthRequired(NewPage);
