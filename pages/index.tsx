import InnerLayout from "../components/InnerLayout";
import { PrimaryButton } from "../components/Button";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import { ApplicationsPanel, BuildsPanel } from "../components/Panel";

function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(user);

  return (
    <InnerLayout>
      <div className="grid grid-cols-2 gap-10">
        <ApplicationsPanel />
        <BuildsPanel />
      </div>
    </InnerLayout>
  );
}

export default withPageAuthRequired(Home);
