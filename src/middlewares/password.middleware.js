import bcryptjs from "bcryptjs";

export const hash_password = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  return await bcryptjs.hash(password, salt);
};
