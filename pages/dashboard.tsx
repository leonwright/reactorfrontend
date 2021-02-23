import InnerLayout from "../components/InnerLayout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const dashboard = ({ children }) => {
  return <InnerLayout>{children}</InnerLayout>;
};

export default withPageAuthRequired(dashboard);
