"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";

const UserLoginSection = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  // console.log(user);
  return (
    <div>
      {user ? (
        <div>
          <div className="flex gap-4 items-center py-2">
            <Link href={"/profile"}>
              <Avatar>
                <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
              </Avatar>
            </Link>
            <h2>{user.name}</h2>
          </div>
          <div className="pt-2">
            <Button variant="danger-soft" onClick={() => handleSignOut()}>
              Sign Out
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <Link href="/sign-in">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="danger">Sign Up</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserLoginSection;
