const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Auth0 configurations
// const auth0 = require('../services/auth0');

// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await auth0.login(username, password);
//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     res.status(400).send('Invalid credentials');
//   }
// });

module.exports = router;