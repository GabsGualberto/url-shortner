const urlShortnerService = require('../services/urlShortnerService');

exports.CreateShortnedUrl = async (req, res) => {
    const { originalURL } = req.body;

    const urlData = await urlShortnerService.shortenURL(originalURL);
    res.status(201).json(urlData);
};

exports.GetShortnedUrl = async (req, res) => {
    const { url } = req.params;
    try {
      const originalUrl = await urlShortnerService.getOriginalUrl(url);
      res.status(200).json(originalUrl.original_url); 
    } catch (error) {
      res.status(404).json({ message: 'URL não encontrada', error: error.message });
    }
  };