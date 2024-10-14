const urlShortnerService = require('../services/urlShortnerService');

exports.CreateShortnedUrl = async (req, res) => {
    const { originalURL } = req.body;
    const user  = req.user ? req.user : null;
    const urlData = await urlShortnerService.shortenURL(originalURL, user.id);
    res.status(201).json(urlData);
};

exports.GetShortnedUrl = async (req, res) => {
    const { url } = req.params;
    try {
      const originalUrl = await urlShortnerService.getOriginalUrl(url);
      res.status(200).json(originalUrl.original_url); 
    } catch (error) {
      res.status(404).json({ message: 'Url not founded', error: error.message });
    }
  };