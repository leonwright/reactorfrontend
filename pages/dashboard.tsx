import InnerLayout from "../components/InnerLayout";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

const dashboard = ({ children }) => {
  const { user } = useUser();
  return <InnerLayout user={user}>{children}</InnerLayout>;
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { user } = useUser();
//   return { props: { user } };
// };

export default withPageAuthRequired(dashboard);
