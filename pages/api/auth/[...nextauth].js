import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        name: { label: "Name", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const _name = credentials.name;
        const _email = credentials.email;
        const _pasword = credentials.password;
        try {
          if (_name && _email && _pasword) {
            const user = { name: _name, email: _email };
            if (user) {
              return user;
            } else {
              return null;
            }
          } else {
            console.log("Please insert every field");
            return null;
          }
        } catch (err) {
          return err;
        }
      },
    }),
  ],
});
