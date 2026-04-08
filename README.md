# Paul Hajj - Portfolio Site

A clean, minimal portfolio site built with HTML, CSS, and vanilla JavaScript.

## Structure

- `index.html` - Main page with hero, projects, brands, and experience sections
- `styles.css` - All styling with CSS variables for easy customization
- `script.js` - Basic interactivity and smooth scrolling
- `.gitignore` - Git configuration

## Setup & Deployment

### 1. Create a GitHub Account (if you don't have one)
- Go to [github.com](https://github.com)
- Sign up and create an account

### 2. Create a New Repository
- Click the "+" icon in the top right → "New repository"
- Name it `portfolio` (or whatever you prefer)
- Add a description (optional)
- **DO NOT initialize with README, .gitignore, or license** (we have these already)
- Click "Create repository"

### 3. Push Files to GitHub (from your computer)
Follow the instructions GitHub shows after creating the repo. They'll look like:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

(Replace YOUR-USERNAME with your actual GitHub username)

### 4. Deploy to Vercel
- Go to [vercel.com](https://vercel.com)
- Sign up with GitHub
- Click "Import Project"
- Select the `portfolio` repository
- Click "Deploy"
- Your site goes live instantly

### 5. Connect Your Custom Domain
- In Vercel project settings → Domains
- Add `design.paulhajj.com`
- Update your domain registrar's DNS settings (Vercel will show you how)

## Making Changes

After initial setup:

1. **Make changes locally** to the files (HTML, CSS, JS)
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Updated [description]"
   git push
   ```
3. **Vercel auto-deploys** within seconds

You can also work with Claude to modify the files — just paste the updated code and push to GitHub.

## Notes

- All images are linked from the live Figma Site to avoid duplicating assets
- CSS uses CSS variables for easy color/spacing updates
- Site is fully responsive for mobile, tablet, and desktop
