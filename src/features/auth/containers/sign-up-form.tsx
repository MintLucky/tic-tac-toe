"use client";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";

import { BottomLink } from "../ui/link";

export function SignUpForm() {
  return (
    <AuthFormLayout
      title="Sign Up"
      description="Create your account to get started"
      action={undefined}
      fields={<AuthFields />}
      actions={undefined}
      error={undefined}
      link={
        <BottomLink
          text="Already have an account?"
          linkText="Sign in"
          url={"sign-in"}
        />
      }
    />
  );
}
