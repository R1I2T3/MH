"use server";

import { actionClient } from "@/lib/safe-action";
import { SignupSchema } from "./schema";
import { hash } from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
export const SignUpAction = async ({ parsedInput }) => {
  console.log(parsedInput);

  const isUserPresent = await prisma.user.findFirst({
    username: parsedInput?.username,
  });
  if (isUserPresent) {
    return { error: "Username or email is already in use" };
  }
  const hashedPassword = await hash(parsedInput.password, 10);
  await prisma.user.create({
    username: parsedInput.username,
    email: parsedInput.email,
    password: hashedPassword,
  });
  const token = jwt.sign({ id: user._id }, env.JWT_SECRET, {
    expiresIn: "10d",
  });
  cookies().set("token", token, { maxAge: 60 * 60 * 24 * 10 });
  return redirect("/");
};
