const urlShortnerService = require('../services/urlShortnerService');

exports.CreateShortnedUrl = (req, res) => {
    const { originalURL } = req.body;

    const urlData = urlShortnerService.shortenURL(originalURL);
    res.status(201).json(urlData);
};

exports.GetShortnedUrl = (req, res) => {
    const { url } = req.params;

    try{
        const originalUrl = urlShortnerService.getOriginalUrl(url);
        res.redirect(originalUrl); 
    } catch (error) {
      res.status(404).json({ message: "URL não encontrada", error: error.message });
    }
};

