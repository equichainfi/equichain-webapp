"use client";

import UserAuthForm from "@/components/UserAuthForm";
import { LogoPlain } from "../../public";

const SignIn = () => {
    return (
        <main className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
            <section className="flex flex-col space-y-2 text-center">
                <LogoPlain className="mx-auto h-6 w-6" />
                <h1 className="text-2xl font-semibold tracking-tight">
                    Welcome back
                </h1>
                <p className="text-sm max-w-xs mx-auto">
                    By continuing, you are setting up a Equichain.fi account and
                    agree to our User Agreement and Privacy Policy.
                </p>
            </section>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
                New to Equichain.fi?{" "}
                {/* <Link
                    href="/sign-up"
                    className="hover:text-brand text-sm underline underline-offset-4"
                >
                    Sign Up
                </Link> */}
            </p>
        </main>
    );
};

export default SignIn;
