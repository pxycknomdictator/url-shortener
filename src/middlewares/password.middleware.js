import bcryptjs from "bcryptjs";

const hash_password = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  return await bcryptjs.hash(password, salt);
};

const decrypt_password = async (password, hash) => {
  return await bcryptjs.compare(password, hash);
};

export { hash_password, decrypt_password };
