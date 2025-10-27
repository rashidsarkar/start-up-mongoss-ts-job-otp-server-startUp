import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'email is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
  }),
});
const passwordChangeValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'Old password is required',
    }),
    newPassword: z
      .string({
        required_error: 'New password is required',
      })
      .min(6, 'password must be at least 6 characters long'),
  }),
});
const forgotPasswordValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'email is required',
    }),
  }),
});
const resetPasswordValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'email is required',
    }),
    newPassword: z.string({
      required_error: 'New password is required',
    }),
  }),
});
export const AuthValidation = {
  loginValidationSchema,
  passwordChangeValidationSchema,
  forgotPasswordValidationSchema,
  resetPasswordValidationSchema,
};
