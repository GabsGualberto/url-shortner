const crypto = require('crypto');
const Url = require('../models/urlModel');



exports.shortenURL = async (originalUrl, user) => {
    const urlCode = crypto.randomBytes(3).toString('hex');

    const urlData = await Url.create({ original_url: originalUrl, url_code: urlCode, id_user: user });

    return {urlCode, urlData};
}

exports.getOriginalUrl = async (urlCode) => {
    const originalUrl = await Url.findOne({where: {url_code: urlCode}});
    if (!originalUrl) {
      console.log("URL not founded"); 
    }
    return originalUrl;
  };

exports.updateTotalCount = async(urlCode, new_count) => {
  const originalUrl = await Url.findOne({where: {url_code: urlCode}});
  originalUrl.set({total_access: new_count});
  return originalUrl;
}