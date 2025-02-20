"use server";

import { signIn } from "../../../../auth";
import { AuthError } from "next-auth";

type ActionReturn = {
  success: boolean;
  message?: string;
};

export default async function loginAction(
  _prevState: ActionReturn,
  formData: FormData
): Promise<ActionReturn> {
  try {
    if (!formData.get("email") || !formData.get("password")) {
      return {
        success: false,
        message: "error",
      };
    }

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!result || result.error) {
      return {
        success: false,
        message: "error",
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: "error",
    };
  }
}
