const handleGenerateShortUrl = async (req, res) => {
  try {
    res.status(201).json({ message: "Short Url Generated" });
  } catch (error) {
    res.status(401).send(`Error ${error?.message}`);
  }
};

const handleRedirectUrl = async (req, res) => {
  try {
    res.status(201).json({ message: "Redirected to url" });
  } catch (error) {
    res.status(401).send(`Error ${error?.message}`);
  }
};

export { handleGenerateShortUrl, handleRedirectUrl };
