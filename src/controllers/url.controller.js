import { Urls } from "../models/url.model.js";
import { User } from "../models/user.model.js";
import { generateShortId } from "../services/shortid.js";

const handleShowApplication = async (req, res) => {
  const { fullName, _id } = req.user;
  const all_urls = await User.findById({ _id }).populate("urls");
  res.status(200).render("app", { fullName, urls: all_urls.urls });
};

const handleGenerateShortUrl = async (req, res) => {
  const { url } = req.body;
  const userId = req.user._id;
  try {
    const id = generateShortId();
    const newUrl = await Urls.create({
      originalUrl: url,
      shortId: id,
      shortUrl: `localhost:3000/${id}`,
      author: userId,
    });
    await User.updateOne({ _id: userId }, { $push: { urls: newUrl._id } });
    res.status(201).redirect("/");
  } catch (error) {
    res.status(500).send(`Error generating short URL: ${error.message}`);
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
