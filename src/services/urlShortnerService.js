const crypto = require('crypto');
const Url = require('../models/urlModel');



exports.shortenURL = async (originalUrl) => {
    const urlCode = crypto.randomBytes(3).toString('hex');

    const urlData = await Url.create({ original_url: originalUrl, url_code: urlCode });

    return {urlCode, urlData};
}

exports.getOriginalUrl = async (urlCode) => {
    console.log("url", urlCode)
    const originalUrl = await Url.findOne({where: {url_code: urlCode}});
    console.log(originalUrl)
    if (!originalUrl) {
      console.log("URL not founded"); 
    }
    return originalUrl;
  };