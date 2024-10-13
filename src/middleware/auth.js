const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'access denied' });
  console.log(token);
  try {
    const verified = jwt.verify(token.split(" ")[1], 'secretKey');
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Token inválido' });
  }
};

module.exports = auth;