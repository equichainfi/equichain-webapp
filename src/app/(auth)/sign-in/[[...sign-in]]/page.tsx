import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <main className="signing-page">
            <SignIn />
        </main>
    );
}
