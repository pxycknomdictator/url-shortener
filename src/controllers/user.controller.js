const handleShowRegisterPage = (req, res) => {
  res.status(200).render("register");
};

const handleShowLoginPage = (req, res) => {
  res.status(200).render("login");
};

const handleRegisterNewUser = async (req, res) => {
  try {
    res.status(201).json({ message: "User Register" });
  } catch (error) {
    res.status(401).send(`Error ${error?.message}`);
  }
};

const handleLoginUser = async (req, res) => {
  try {
    res.status(201).json({ message: "User Login" });
  } catch (error) {
    res.status(401).json({ error: `Error ${error?.message}` });
  }
};

export {
  handleShowRegisterPage,
  handleShowLoginPage,
  handleRegisterNewUser,
  handleLoginUser,
};
