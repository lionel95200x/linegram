import Stripe from 'stripe';

const KEY =
  'sk_test_51Niwg4DEnDdPYtpAi2aDy5luTxnMGEVInPTs3fFzrHV1QPM6YgHmllL7VOS9Kr8Wn4zf62UpWE5f6B8aURzWshP100OrVpiNhz'; // getEnvVar(process.env.STRIPE_SECRET_KEY, 'STRIPE_SECRET_KEY');
console.log({ KEY });

export const stripeAdmin = new Stripe(KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2023-10-16',
  // Register this as an official Stripe plugin.
  // https://stripe.com/docs/building-plugins#setappinfo
  appInfo: {
    name: 'Orion AI',
    version: '0.1.0',
  },
});
