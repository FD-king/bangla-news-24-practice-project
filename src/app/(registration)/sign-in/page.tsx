"use client";
import { signIn } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

const SignInPage = () => {
  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data: resData, error } = await signIn.email({
      ...data,
      callbackURL: "/",
    });
    // console.log(resData, error);
  };

  const handleGoogleSignIn = async () => {
    const data = await signIn.social({
      provider: "google",
    });
  };
  const handleGithubSignUp = async () => {
    const data = await signIn.social({
      provider: "github",
    });
  };
  return (
    <div className="flex justify-center container mx-auto p-47">
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Sign In</legend>

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Sign In
          </button>
        </fieldset>
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => handleGoogleSignIn()}
            className="w-80"
            variant="tertiary"
          >
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
          <Button
            onClick={() => handleGithubSignUp()}
            className="w-80"
            variant="tertiary"
          >
            <Icon icon="mdi:github" />
            Sign in with GitHub
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
