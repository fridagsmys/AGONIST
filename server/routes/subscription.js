const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/subscribe', async (req, res) => {
  const { token, planId } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: req.body.email,
      source: token,
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ plan: planId }],
    });

    res.json(subscription);
  } catch (error) {
    res.status(500).send('Subscription failed');
  }
});

module.exports = router;
