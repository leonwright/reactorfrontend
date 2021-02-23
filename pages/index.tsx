import InnerLayout from "../components/InnerLayout";
import { PrimaryButton } from "../components/Button";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import { ApplicationsPanel, BuildsPanel } from "../components/Panel";
import { GetServerSideProps } from "next";

function Home({}) {
  const { user } = useUser();

  return (
    <InnerLayout user={user}>
      <div className="grid grid-cols-2 gap-10">
        <ApplicationsPanel />
        <BuildsPanel />
      </div>
    </InnerLayout>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { user } = useUser();
//   return { props: { user } };
// };

export default withPageAuthRequired(Home);
