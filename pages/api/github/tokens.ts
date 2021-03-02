import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { ManagementClient, User } from "auth0";
import { getTokensFromUser } from "../../../utils/github";

const tokenRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const session = getSession(req, res);

    const auth0 = new ManagementClient({
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_MANAGEMENT_API_CLIENT_ID,
      clientSecret: process.env.AUTH0_MANAGEMENT_API_CLIENT_SECRET,
      scope: "read:users update:users",
    });

    const user: User = (await auth0.getUsersByEmail(session.user.email))[0];

    res.status(200).json({
      message: "success",
      data: {
        tokens: getTokensFromUser(user),
      },
    });
  } else {
    res.status(405).json({
      message: `Method ${req.method} is not allowed.`,
    });
  }
};

export default withApiAuthRequired(tokenRoute);
