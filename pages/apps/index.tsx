import { useRouter } from "next/router";
import InnerLayout from "../../components/InnerLayout";
// @ts-ignore
import ArrowLeft from "../../components/icons/outline/arrow-left.svg";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import { ApplicationsPanel, Panel } from "../../components/Panel";

const AppsPage = () => {
  const { user } = useUser();

  const router = useRouter();
  return (
    <InnerLayout user={user}>
      <button
        className="flex items-center hover:opacity-50"
        onClick={() => {
          router.back();
        }}
      >
        <ArrowLeft className="h-5 mr-5" /> Back
      </button>
      <div>
        <ApplicationsPanel className="mt-5" />
      </div>
    </InnerLayout>
  );
};

export default withPageAuthRequired(AppsPage);
