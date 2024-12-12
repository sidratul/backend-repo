import { z } from "zod";

export const userUpdateValidation = z.object({
  id: z.string(),
  email: z.string().email().optional(),
  name: z.string().min(5).optional(),
  address: z.string().min(10).optional(),
  phoneNumber: z.string().min(7).max(20).optional(),
});

export type UserUpdateData = z.infer<typeof userUpdateValidation>;