import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

const tokenRoute = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const session = getSession(req, res);

    console.log(process.env);
    res.status(200).json({
      token: "token",
    });
  } else {
    res.status(405).json({
      message: `Method ${req.method} is not allowed.`,
    });
  }
};

export default withApiAuthRequired(tokenRoute);
