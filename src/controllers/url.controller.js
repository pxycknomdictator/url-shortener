import { Urls } from "../models/url.model.js";
import { generateShortId } from "../services/shortid.js";

const handleShowApplication = (req, res) => {
  const { fullName } = req.user;
  res.status(200).render("app", { fullName });
};

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
  const id = req.params.shortId;
  try {
    const url = await Urls.findOneAndUpdate(
      { shortId: id },
      { $inc: { visit_history: 1 } }
    );
    if (!url) {
      return res.status(401).send("This url not exists");
    }
    res.status(201).redirect(`${url.originalUrl}`);
  } catch (error) {
    res.status(401).send(`Error ${error?.message}`);
  }
};

export { handleGenerateShortUrl, handleRedirectUrl, handleShowApplication };
