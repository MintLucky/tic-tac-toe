"use client";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { BottomLink } from "../ui/link";

export function SignInForm() {
  return (
    <AuthFormLayout
      title="Sign In"
      description="Welcome back! Please sign in to your account"
      action={undefined}
      fields={<AuthFields />}
      actions={undefined}
      error={undefined}
      link={
        <BottomLink
          text="Don't have an account?"
          linkText="Sign up"
          url={"sign-up"}
        />
      }
    />
  );
}
