import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { supabase } from '@/lib/supabase'

// Webhook secret from Stripe Dashboard -> Webhooks -> Signing secret
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
        return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
    }

    if (!webhookSecret) {
        console.error('STRIPE_WEBHOOK_SECRET is not configured')
        return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
    }

    let event: Stripe.Event
    let stripe

    try {
        stripe = getStripe()
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
        console.error('Webhook processing failed:', err)
        return NextResponse.json({ error: 'Webhook processing failed' }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed': {
            const session = event.data.object as Stripe.Checkout.Session
            await handleCheckoutComplete(session)
            break
        }

        case 'customer.subscription.created':
        case 'customer.subscription.updated': {
            const subscription = event.data.object as Stripe.Subscription
            await handleSubscriptionChange(subscription)
            break
        }

        case 'customer.subscription.deleted': {
            const subscription = event.data.object as Stripe.Subscription
            await handleSubscriptionCancelled(subscription)
            break
        }

        case 'invoice.payment_failed': {
            const invoice = event.data.object as Stripe.Invoice
            await handlePaymentFailed(invoice)
            break
        }

        default:
            console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
}

async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
    // TODO: Implement when Supabase schema is ready
    // 1. Look up user by session.customer_email or session.client_reference_id
    // 2. Update their subscription status in Supabase
    // 3. Provision their tier (Grove, Forest, etc.)
    console.log('Checkout completed:', session.id)
}

async function handleSubscriptionChange(subscription: Stripe.Subscription) {
    // TODO: Implement when Supabase schema is ready
    // 1. Get customer ID from subscription
    // 2. Look up user in Supabase by stripe_customer_id
    // 3. Update subscription status and tier
    console.log('Subscription changed:', subscription.id, subscription.status)
}

async function handleSubscriptionCancelled(subscription: Stripe.Subscription) {
    // TODO: Implement when Supabase schema is ready
    // 1. Downgrade user to Seed tier
    // 2. Mark subscription as cancelled
    console.log('Subscription cancelled:', subscription.id)
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
    // TODO: Implement when Supabase schema is ready
    // 1. Send payment failure notification
    // 2. Optionally start grace period
    console.log('Payment failed for invoice:', invoice.id)
}
