import Stripe from 'stripe'

// Stripe is only initialized when API key is available
// This allows the app to build without runtime credentials
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

export const stripe = stripeSecretKey
    ? new Stripe(stripeSecretKey, {
        apiVersion: '2025-12-15.clover',
        typescript: true,
    })
    : null

// Helper to get Stripe client with proper error handling
export function getStripe(): Stripe {
    if (!stripe) {
        throw new Error('Stripe is not configured. Set STRIPE_SECRET_KEY environment variable.')
    }
    return stripe
}
