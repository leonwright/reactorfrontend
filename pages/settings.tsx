import InnerLayout from "../components/InnerLayout";
import { GetServerSideProps } from "next";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";

const settings = ({}) => {
  const { user } = useUser();

  return (
    <InnerLayout user={user}>
      <h1>Settings</h1>
    </InnerLayout>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { user } = useUser();
//   return { props: { user } };
// };

export default withPageAuthRequired(settings);
