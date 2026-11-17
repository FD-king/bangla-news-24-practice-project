"use client";

import { signIn, signUp } from "@/lib/auth-client";
import { Icon } from "@iconify/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import Link from "next/link";

const SignUpPage = () => {
  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Form data:", Object.fromEntries(formData.entries()));
    const data = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    const { data: resData, error } = await signUp.email({
      ...data,
    });
    if (resData) {
      redirect("/");
    }
    // console.log(resData, error);
  };

  const handleGoogleSignUp = async () => {
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
    <div className="flex justify-center items-center my-43">
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="name"
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="John Doe" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">Submit</Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => handleGoogleSignUp()}
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
        <div className="flex gap-4 justify-between items-center ">
          <Link href={"/sign-in"}>
            <Button variant="secondary">have an account? Sign In</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};
export default SignUpPage;
