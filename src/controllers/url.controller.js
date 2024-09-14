import { Urls } from "../models/url.model.js";
import { generateShortId } from "../services/shortid.js";

const handleGenerateShortUrl = async (req, res) => {
  const { url } = req.body;
  try {
    const id = generateShortId();
    const newUrl = await Urls.create({
      originalUrl: url,
      shortId: id,
      shortUrl: `localhost:3000/${id}`,
    });
    res.status(201).json(newUrl);
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
