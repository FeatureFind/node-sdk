import jwt from "jsonwebtoken";

export function createAuthResource(apiKey) {
  return {
    generateToken: (user) => {
      if (!user) {
        throw new Error("FeatureFind SDK Error: User is required");
      }

      const { id, name, email } = user;

      if (!id || !name || !email) {
        throw new Error(
          "FeatureFind SDK Error: User `id`, `name`, and `email` are required"
        );
      }

      const token = jwt.sign(
        {
          id,
          name,
          email,
        },
        apiKey,
        {
          expiresIn: 60 * 60 * 24 * 7, // 7 days
        }
      );

      return token;
    },
  };
}
