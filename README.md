# Personal Blog Template

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SaidYaka-Work/personal-blog-starter&project-name=my-blog&repository-name=my-blog)

Dead simple blog template. Just edit files on GitHub - no complex tools needed!

## 🚀 Get Started (2 Minutes)

### Step 1: Deploy
1. Click the "Deploy with Vercel" button above
2. Sign in with GitHub
3. Click "Deploy"
4. **Done! Your blog is live!**

### Step 2: Customize
Go to your new GitHub repository and edit these 3 things:

#### 1. Your Info (`content/settings/site.json`)
```json
{
  "site": {
    "title": "Your Name - Blog",
    "url": "https://yoursite.com"
  },
  "author": {
    "name": "Your Name",
    "bio": "Your bio here"
  },
  "social": {
    "twitter": "yourusername",
    "github": "yourusername"
  },
  "theme": {
    "primaryColor": "#3B82F6"
  }
}
```

#### 2. Write a Post (`content/posts/my-first-post.mdx`)
Create a new file, copy this template:

```markdown
---
slug: "my-first-post"
title: "My First Post"
date: 2025-11-03
author: Your Name
tags:
  - Personal
description: "My first blog post!"
---

# Hello World

This is my first blog post. Write anything here!

## You can use:
- **Bold text**
- *Italics*
- [Links](https://example.com)
- Images: `![Alt text](/images/photo.jpg)`
```

#### 3. Add Images (`public/images/`)
Upload images to this folder, then use them in posts:
```markdown
![My Photo](/images/my-photo.jpg)
```

**That's it!** Changes go live in 2 minutes.

---

## 📁 Simple Structure

```
├── content/
│   ├── posts/          ← Your blog posts (.mdx files)
│   └── settings/       ← Site settings (site.json)
├── public/
│   └── images/         ← Your images
└── README.md           ← You are here!
```

---

## ✏️ How to Edit

### On GitHub (Easiest):
1. Go to your repository
2. Click on a file
3. Click the pencil icon (Edit)
4. Make changes
5. Click "Commit changes"
6. Wait 2 minutes - live!

### Schedule Posts:
Set a future date in the post frontmatter. It will auto-publish on that date!

---

## 🎨 What You Can Change

Edit `content/settings/site.json`:
- ✅ Your name, bio, social links
- ✅ Site title and description  
- ✅ Theme colors (hex codes)
- ✅ SEO keywords

---

## 💰 Cost

- **Everything: FREE**
- Optional domain: ~$12/year

---

## 🆘 Help

**Q: How do I write a post?**  
A: Create a new `.mdx` file in `content/posts/`, copy the template above

**Q: How do I add images?**  
A: Upload to `public/images/` on GitHub, use `![Alt](/images/name.jpg)` in posts

**Q: Changes not showing?**  
A: Wait 2-3 minutes for Vercel to rebuild

**Q: How do I change colors?**  
A: Edit `theme.primaryColor` in `content/settings/site.json` (use hex codes like `#FF0000`)

---

## 🎉 You're Ready!

1. Click "Deploy with Vercel"
2. Edit `site.json` with your info
3. Write your first post
4. Share your blog!

**Template by [Said Yaka](https://github.com/SaidYaka-Work)**

## 🎨 Customize Your Icon/Favicon

Replace `app/icon.png` with your own image:
1. Go to `app/icon.png` in your repository
2. Click "Delete file"
3. Click "Upload files"
4. Upload your icon (PNG, 512x512px recommended)
5. Name it `icon.png`
6. Commit

Your browser tab icon will update!

---
