---
description: How to deploy the Bonsai SaaS application
---

# Deploying Bonsai SaaS

Follow these steps to deploy the application to a production environment.

## 1. Environment Setup
Create a new project on [Vercel](https://vercel.com) and link it to your GitHub repository.

## 2. Configure Environment Variables
Copy the variables from `.env.example` to the Vercel project settings:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_POSTHOG_KEY`

## 3. Stripe Webhook Configuration
// turbo
1. Install the [Stripe CLI](https://stripe.com/docs/stripe-cli).
2. Run `stripe listen --forward-to localhost:3000/api/webhooks/stripe` for local testing.
3. For production, add your Vercel deployment URL in the Stripe Dashboard under Webhooks: `https://your-domain.com/api/webhooks/stripe`.

## 4. Supabase Auth
Enable GitHub and Google providers in the Supabase Auth settings and add your Vercel URL to the "Redirect URLs".

## 5. Deployment
// turbo
1. Push your changes to the `main` branch.
2. Vercel will automatically trigger a build and deploy.
3. Run `npm run build` locally first to ensure final verification.
