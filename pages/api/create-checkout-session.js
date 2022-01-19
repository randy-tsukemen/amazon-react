const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { items, email } = req.body;

  console.log(items, email);
}
