"use client";
import { signIn } from "@/lib/auth-client";
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
      </form>
    </div>
  );
};

export default SignInPage;
