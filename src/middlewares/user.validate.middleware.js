import { formSchema } from "../services/user.schema.validate.js";

export const validateUserInformation = async ({
  fullName,
  email,
  password,
}) => {
  try {
    return await formSchema.parseAsync({ fullName, email, password });
  } catch (error) {
    return `${error.errors[0].message}`;
  }
};
