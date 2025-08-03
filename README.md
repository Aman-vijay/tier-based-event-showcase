# 🎟️ Tier-Based Event Showcase
> Responsive event portal with tier-based access built using Next.js 14, Clerk.dev, Supabase & Tailwind CSS.



## 🚀 Tech Stack

- **Frontend:** Next.js 14 (App Router)
- **Authentication:** Clerk.dev
- **Database:** Supabase (PostgreSQL)
- **Styling:** Tailwind CSS

## ✨ Features

- 🔐 **Authentication:** Secure login/signup with Clerk.dev
- 🎯 **Tier-Based Access:** Events filtered by user membership tier
- 📱 **Responsive Design:** Mobile-friendly UI with Tailwind CSS
- ⚡ **Real-time Updates:** Live tier upgrades and event filtering
- 🎨 **Modern UI:** Clean, professional interface with loading states

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager
- Clerk.dev account
- Supabase account

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd tier-based-event-showcase
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Setup

Copy the example environment file and update with your credentials:

```bash
cp .env.local.example .env.local
```

Update `.env.local` with your actual credentials:

```env
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/events
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/events

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup

In your Supabase SQL editor, run the following SQL to create the events table and seed data:
The queries that i have ran - 

```sql
-- Create the events table
CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    event_date TIMESTAMP NOT NULL,
    image_url TEXT,
    tier TEXT NOT NULL CHECK (tier IN ('free', 'silver', 'gold', 'platinum')),
    created_at TIMESTAMP DEFAULT now()
);

-- Seed with sample events (2 per tier)
insert into events (title, description, event_date, image_url, tier) values
('Open Workshop', 'Basics of AI', '2025-08-05T10:00:00Z', 'https://placehold.co/400x200', 'free'),
('Community Meetup', 'Connect with tech folks.', '2025-08-06T15:00:00Z', 'https://placehold.co/400x200', 'free'),
('Silver Roundtable', 'Advanced ML concepts', '2025-08-07T14:00:00Z', 'https://placehold.co/400x200', 'silver'),
('Silver Webinar', 'Security in Cloud', '2025-08-08T12:00:00Z', 'https://placehold.co/400x200', 'silver'),
('Gold Deep Dive', 'Prompt Engineering Mastery', '2025-08-09T10:00:00Z', 'https://placehold.co/400x200', 'gold'),
('Platinum Exclusive', '1:1 with AI Leaders', '2025-08-10T11:00:00Z', 'https://placehold.co/400x200', 'platinum');


### 5. Configure Clerk

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application
3. Copy your Publishable Key and Secret Key to `.env.local`
4. Configure sign-in/sign-up URLs in Clerk settings:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in: `/events`
   - After sign-up: `/events`

### 6. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 👥 Demo User Credentials

To test different tier functionalities, create accounts and use the upgrade page to set tiers:

### Free Tier User
- **Email:** `free.user@example.com`
- **Password:** `FreeTier123!`
- **Access:** Free tier events only (2 events)

### Silver Tier User
- **Email:** `silver.user@example.com`
- **Password:** `SilverTier123!`
- **Access:** Free + Silver tier events (4 events total)

### Gold Tier User
- **Email:** `gold.user@example.com`
- **Password:** `GoldTier123!`
- **Access:** Free + Silver + Gold tier events (6 events total)

### Platinum Tier User
- **Email:** `platinum.user@example.com`
- **Password:** `PlatinumTier123!`
- **Access:** All tier events (8 events total)

> **Note:** After creating an account, visit the `/upgrade` page to set your tier. The tier is stored in Clerk user metadata and will persist across sessions.

## 🔧 Testing Instructions

1. **Sign up** with any email/password
2. **Visit `/upgrade`** to set your membership tier
3. **Go to `/events`** to see filtered events based on your tier
4. **Test tier upgrades** by changing your tier and refreshing the events page
5. **Verify access control** - lower tiers should not see higher tier events

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── EventCards.tsx     # Event card component
│   │   └── Header.tsx         # Navigation header
│   ├── events/
│   │   └── page.tsx          # Events listing page
│   ├── sign-in/
│   │   └── page.tsx          # Sign-in page
│   ├── sign-up/
│   │   └── page.tsx          # Sign-up page
│   ├── upgrade/
│   │   └── page.tsx          # Tier upgrade page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── lib/
│   ├── events.ts             # Event fetching logic
│   └── supabase.ts           # Supabase client & types
└── middleware.ts             # Route protection
```



### Environment Variables for Production

Make sure to add all environment variables from `.env.local` to your Vercel project settings.

## 🎯 Key Features Implemented

- ✅ Clerk.dev authentication with metadata storage
- ✅ Supabase database with proper schema
- ✅ Tier-based event filtering
- ✅ Responsive UI with Tailwind CSS
- ✅ Loading states and error handling
- ✅ Tier upgrade simulation
- ✅ Route protection middleware
- ✅ Mobile-friendly design

## 📝 License

This project is for demonstration purposes.
