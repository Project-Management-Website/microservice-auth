import z, { array, object, string, TypeOf } from 'zod';

const loginPayload = {
  body: object({
    username: string({
      required_error: 'username is required',
    }).min(1, 'Sorry, you have entered an invalid username and/or password'),
    password: string({
      required_error: 'password is required',
    }).min(6, 'Sorry, you have entered an invalid username and/or password'),
  }),
};

const registerPayload = {
  body: object({
    username: string({
      required_error: 'username is required',
    }),
    password: string({
      required_error: 'password is required',
    }).min(6),
    confirm_password: string({
      required_error: 'confirm password is required',
    }).min(6),
    email: string(),
    role: string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirm_password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Password and Confirm Password must match',
        path: ['password'],
      });
    }
  })
}

const params = {
  params: object({
    id: string({
      required_error: 'id is required',
    }),
  }),
};

export const getUserSchema = object({
  ...params,
})

export const loginSchema = object({
  ...loginPayload,
});

export const registerSchema = object({
  ...registerPayload,
})

export type LoginInput = TypeOf<typeof loginSchema>;
export type RegisterInput = TypeOf<typeof registerSchema>;
export type GetUserInput = TypeOf<typeof getUserSchema>;