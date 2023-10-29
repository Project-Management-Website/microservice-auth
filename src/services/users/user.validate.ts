import { object, string, TypeOf } from 'zod';

const payload = {
  body: object({
    username: string({
      required_error: 'username is required',
    }).min(1, 'Sorry, you have entered an invalid username and/or password'),
    password: string({
      required_error: 'password is required',
    }).min(1, 'Sorry, you have entered an invalid username and/or password'),
  }),
};

export const loginSchema = object({
  ...payload,
});

export type LoginInput = TypeOf<typeof loginSchema>;
