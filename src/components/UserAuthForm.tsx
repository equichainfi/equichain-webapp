"use client";

import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import { Button, Icons } from ".";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
    // const { toast } = useToast();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loginWithGoogle = async () => {
        setIsLoading(true);

        try {
            await signIn("google");
        } catch (error) {
            // toast({
            //     title: "Problem while logging!",
            //     description: "There was an problem logging in with Google",
            //     variant: "destructive",
            // });
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={cn("flex justify-center w-80", className)} {...props}>
            <Button
                isLoading={isLoading}
                type="button"
                size="sm"
                className="w-full text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                onClick={loginWithGoogle}
                disabled={isLoading}
            >
                {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
                Google
            </Button>
        </div>
    );
};

export default UserAuthForm;
