# Quick Start Guide - For You (The Template Owner)

## Testing Tina CMS Locally

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Visit the admin panel:**
   Open your browser to `http://localhost:3000/admin/index.html`

3. **Edit blog posts:**
   - You'll see all your posts from `content/posts/`
   - Click any post to edit it
   - Changes save to your local files immediately

---

## Setting Up for Production

### Step 1: Create a Tina Cloud Account

1. Go to [app.tina.io](https://app.tina.io)
2. Sign in with GitHub
3. Click "Create Project"
4. Select your repository
5. Copy the Client ID and Token that are generated

### Step 2: Add Environment Variables to Vercel

1. Go to your project on [vercel.com](https://vercel.com)
2. Click **Settings** → **Environment Variables**
3. Add these two variables:
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID = your_client_id_here
   TINA_TOKEN = your_token_here
   ```
4. Click **Deployments** → **Redeploy**

### Step 3: Test It

1. Go to `https://your-site.vercel.app/admin/index.html`
2. Sign in with GitHub
3. Edit a post
4. Save - it will commit to GitHub automatically
5. Your site will rebuild and update in 2 minutes

---

## Creating a Template for Coworkers

### Option A: Make This Repo a Template

1. Go to your repository settings on GitHub
2. Check **"Template repository"**
3. Share the repo URL with coworkers
4. They click **"Use this template"** to get their own copy

### Option B: Create a Simplified Version

1. Clone this repo
2. Remove your personal posts from `content/posts/`
3. Add a sample post with instructions
4. Customize the README with setup steps
5. Make it a template repository

---

## What's Been Set Up

### Files Added:
- `tina/config.ts` - Tina CMS configuration
- `app/admin/[[...index]]/page.tsx` - Admin route
- `.env.local.example` - Environment variable template
- `SETUP-GUIDE.md` - Complete beginner instructions

### Files Modified:
- `package.json` - Added Tina CMS scripts
- `.gitignore` - Ignoring Tina generated files

### How It Works:
1. Blog posts are stored as `.mdx` files in `content/posts/`
2. Tina CMS provides a visual editor at `/admin`
3. When someone saves a post in Tina, it commits to GitHub
4. Vercel detects the commit and rebuilds the site
5. New post appears live in ~2 minutes

---

## Troubleshooting

### "I can't access /admin"
- Make sure you ran `npm run dev` (not just `next dev`)
- Check that Tina is running in the console output
- Try `/admin/index.html` instead of just `/admin`

### "Changes aren't saving"
- Check that you've connected Tina Cloud (production only)
- Verify environment variables are set in Vercel
- Look for errors in the browser console

### "I see TypeScript errors"
- Run `npm run dev` once - Tina generates types automatically
- Restart your editor to pick up the new types

---

## Next Steps

1. Test the admin panel locally
2. Set up Tina Cloud for production
3. Share the SETUP-GUIDE.md with your coworkers
4. Help them deploy their first blog!

---

## Important Notes

**For Local Development:**
- No Tina Cloud account needed
- Changes save directly to local files
- No commits to GitHub

**For Production (Vercel):**
- Requires Tina Cloud account (free tier is fine)
- Changes commit to GitHub automatically
- Vercel auto-deploys on commit

**Free Tier Limits:**
- Tina: 2 users, 1,000 API requests/month
- Vercel: Unlimited personal projects
- GitHub: Unlimited public repositories
