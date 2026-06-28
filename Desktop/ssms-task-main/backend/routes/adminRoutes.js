const express = require('express');
const router = express.Router();

// TEST ADMIN USER
const ADMIN = {
  username: 'admin',
  password: 'admin123'
};

router.post('/login', (req, res) => {

  console.log('LOGIN BODY:', req.body);

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: 'Missing credentials'
    });
  }

  if (username === ADMIN.username && password === ADMIN.password) {
    return res.json({
      token: 'demo-token-123'
    });
  }

  return res.status(401).json({
    message: 'Invalid login'
  });
});

module.exports = router;