import { z } from "zod";

export const formSchema = z.object({
  fullName: z
    .string()
    .min(4, { message: "Full name must be at least 4 characters long" })
    .max(20, { message: "Full name must be 20 characters or fewer" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Full name can only contain letters and spaces",
    })
    .trim(),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(20, { message: "Password must be 20 characters or fewer" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character",
    }),
});
