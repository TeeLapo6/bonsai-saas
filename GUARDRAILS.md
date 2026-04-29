# Bonsai SAAS Guardrails

> **Purpose**: This document defines integration boundaries for external AI agents (bolt.new, Cursor, Claude, etc.) working on this repository.

## Overview

This repository (`bonsai-saas`) is the marketing and user-facing web application for the Bonsai AI platform. It integrates with:

1. **Supabase** - Authentication and user data
2. **Bonsai-Hub** - Block publishing and discovery API
3. **Stripe** - Payments and subscriptions
4. **Local Bonsai instances** - Via `bonsai://` deep links

---

## 🔴 CRITICAL: Protected Files

**DO NOT MODIFY** these files without explicit human approval. They contain integration logic that other systems depend on.

### Authentication & Data Layer
| File | Purpose | Dependencies |
|------|---------|--------------|
| `/src/lib/supabase.ts` | Supabase client initialization | Hub auth, dashboard |
| `/src/lib/stripe.ts` | Stripe client configuration | Pricing, subscriptions |

### Integration Hooks
| File | Purpose | Dependencies |
|------|---------|--------------|
| `/src/hooks/use-bonsai-deep-link.ts` | Handles `bonsai://` protocol for local app integration | Hub → Local import flow |

### Hub Integration
| File | Purpose | Dependencies |
|------|---------|--------------|
| `/src/app/hub/page.tsx` | Hub landing page with `HUB_URL` configuration | Links to standalone Hub |
| `/src/data/hub-blocks.ts` | Static block definitions for display | Hub UI consistency |

---

## 🟡 CAUTION: API Contracts

These API shapes are consumed by multiple systems. If you need to call these APIs, use them exactly as documented.

### Hub Publish API

**Endpoint:** `POST {HUB_URL}/api/packages/publish`

```typescript
// Request
{
  headers: {
    "Authorization": "Bearer <supabase_access_token>",
    "Content-Type": "application/json"
  },
  body: {
    "block": {
      "manifest_version": "1.0",
      "block_type": "system_prompt" | "tool" | "workflow" | "agent" | "evaluator",
      "metadata": {
        "name": "my-block",
        "display_name": "My Block",
        "version": "1.0.0",
        "author": "username",
        "description": "...",
        "tags": ["tag1", "tag2"],
        "license": "MIT"
      },
      "content": { ... } // Type-specific content
    },
    "hub_metadata": {
      "publisher": { "name": "string", "verified": false },
      "verified": false,
      "downloads": 0,
      "stars": 0
    },
    "content_hash": "sha256:...",
    "signature": null
  }
}

// Response
{
  "success": true,
  "block_id": "my-block",
  "version": "1.0.0",
  "hub_url": "http://hub.example.com/api/blocks/system_prompt/my-block",
  "message": "Successfully published"
}
```

### Hub Block Download API

**Endpoint:** `GET {HUB_URL}/api/blocks/{type}/{name}`

```typescript
// Response: BlockManifest
{
  "manifest_version": "1.0",
  "block_type": "system_prompt",
  "metadata": { ... },
  "content": { ... },
  "dependencies": [],
  "config": {},
  "required_capabilities": [],
  "input_slots": {}
}
```

### Hub Search API (if implemented)

**Endpoint:** `GET {HUB_URL}/api/v1/search?q={query}`

```typescript
// Response
[
  {
    "name": "code-reviewer",
    "display_name": "Code Reviewer",
    "version": "1.0.0",
    "author": "Bonsai",
    "description": "...",
    "tags": ["code"],
    "downloads": 100,
    "stars": 5,
    "verified": true
  }
]
```

---

## 🟢 SAFE: Free to Modify/Create

These paths are safe for agents to create or modify without coordination.

### New Routes
```
/src/app/login/*           # Login/signup pages
/src/app/auth/*            # OAuth callbacks
/src/app/dashboard/*       # User dashboard (protected)
/src/app/profile/*         # User profile
/src/app/blocks/*          # Block management (create, edit)
/src/app/settings/*        # User settings
```

### New Components
```
/src/components/auth/*       # Login forms, social buttons
/src/components/dashboard/*  # Dashboard widgets, stats
/src/components/blocks/*     # Block cards, editors, forms
/src/components/profile/*    # User profile components
```

### New Utilities
```
/src/lib/auth.ts           # Auth helper functions
/src/lib/api.ts            # API client utilities
/src/lib/blocks.ts         # Block manipulation helpers
/src/hooks/use-auth.ts     # Auth state hook
/src/hooks/use-blocks.ts   # Block fetching hook
```

---

## Environment Variables

### Required (Already Defined)
```bash
NEXT_PUBLIC_SUPABASE_URL      # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY # Supabase anon key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
```

### Add for Hub Integration
```bash
NEXT_PUBLIC_HUB_URL=http://localhost:8000  # Hub API URL
```

---

## Block Types Reference

When creating block management UI, support these block types:

```typescript
type BlockType = 
  | 'system_prompt'   // Text templates with variables
  | 'tool'            // MCP tool definitions
  | 'workflow'        // Multi-step pipelines
  | 'agent'           // Complete agent configurations
  | 'evaluator'       // Output scoring/validation
  | 'harness'         // Execution environment configs
  | 'trigger'         // Event-based automation
  | 'dialogue'        // Multi-agent conversations
  | 'memory'          // Context/knowledge stores
  | 'toolkit'         // Tool bundles
  | 'knowledge_base'  // Document collections
  | 'variable_set'    // Reusable variable groups
```

---

## Testing Checklist

Before considering work complete, verify:

- [ ] Protected files are unchanged
- [ ] Login flow completes successfully (Supabase OAuth)
- [ ] Dashboard loads for authenticated users
- [ ] Hub API calls use correct endpoint (`NEXT_PUBLIC_HUB_URL`)
- [ ] Deep links (`bonsai://`) still work from Hub pages
- [ ] No hardcoded URLs (use environment variables)
- [ ] Types match the API contracts above
