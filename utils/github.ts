import { User } from "auth0";

export const getTokensFromUser = (
  user: User
): Array<{ token: string; email: string }> => {
  const tokens = user.identities
    .filter((id) => id.provider == "github")
    .map((id) => {
      if (id.provider == "github") {
        return { token: id.access_token, email: id.profileData.email };
      }
    });

  return tokens;
};
