const crypto = require('crypto');
const baseURL = 'http://localhost:3000';

const ORIGINALURL = "https://teddy360.com.br/material/marco-legal-das-garantias-sancionado-entenda-o-que-muda/";

exports.shortenURL = (originalUrl) => {
    const urlCode = crypto.randomBytes(3).toString('hex');
    const shortUrl = `${baseURL}/${urlCode}`;
    const urlData = {
        originalUrl,
        shortUrl,
        urlCode,
        date: new Date()
    }

    return urlData;
}

exports.getOriginalUrl = (urlCode) => {
    const originalUrl = mockDatabase.find(item => item.urlCode === urlCode)?.originalUrl;
  
    if (!originalUrl) {
      throw new Error("URL não encontrada"); 
    }
  
    return ORIGINALURL;
  };