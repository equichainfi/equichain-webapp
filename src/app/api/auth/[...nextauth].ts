// import { db } from "@/lib/db";
// import { nanoid } from "nanoid";
// import { NextAuthOptions, getServerSession } from "next-auth";
// // ADAPTERS
// import { DrizzleAdapter } from "@auth/drizzle-adapter";
// // PROVIDERS
// import AppleProvider from "next-auth/providers/apple";
// import FacebookProvider from "next-auth/providers/facebook";
// import GoogleProvider from "next-auth/providers/google";
// import LinkedInProvider from "next-auth/providers/linkedin";

// export const authOptions: NextAuthOptions = {
//     adapter: DrizzleAdapter(db),
//     session: {
//         strategy: "jwt",
//         maxAge: 30 * 24 * 60 * 60, // 30 days
//         updateAge: 24 * 60 * 60, // 24 hours
//     },
//     pages: {
//         signIn: "/sign-in",
//         newUser: "/sign-up",
//     },
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID!,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//         }),
//         FacebookProvider({
//             clientId: process.env.FACEBOOK_CLIENT_ID!,
//             clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
//         }),
//         AppleProvider({
//             clientId: process.env.APPLE_ID!,
//             clientSecret: process.env.APPLE_SECRET!,
//         }),
//         LinkedInProvider({
//             clientId: process.env.LINKEDIN_CLIENT_ID!,
//             clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
//         }),
//     ],
//     callbacks: {
//         async session({ token, session }) {
//             if (token) {
//                 session.user.id = token.id;
//                 session.user.name = token.name;
//                 session.user.email = token.email;
//                 session.user.image = token.picture;
//                 session.user.username = token.username;
//             }

//             return session;
//         },

//         async jwt({ token, user }) {
//             const dbUser = await db.user.findFirst({
//                 where: {
//                     email: token.email,
//                 },
//             });

//             if (!dbUser) {
//                 token.id = user!.id;
//                 return token;
//             }

//             if (!dbUser.username) {
//                 await db.user.update({
//                     where: {
//                         id: dbUser.id,
//                     },
//                     data: {
//                         username: nanoid(10),
//                     },
//                 });
//             }

//             return {
//                 id: dbUser.id,
//                 name: dbUser.name,
//                 email: dbUser.email,
//                 picture: dbUser.image,
//                 username: dbUser.username,
//             };
//         },
//         redirect() {
//             return "/";
//         },
//     },
// };

// export const getAuthSession = () => getServerSession(authOptions);
