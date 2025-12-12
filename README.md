# DualWorld Project Website

Official project page for **DualWorld: A Tale of Two Worlds - Dual-System World Models for Embodied AI**.

🌐 **Live Demo**: **https://dualworld.github.io**

## 📋 Repository Setup

This repository MUST be named `dualworld.github.io` to work with GitHub Pages user/organization site.

### Prerequisites

You need a GitHub account or organization named **`dualworld`**.

If you don't have it:
- Option 1: Create a GitHub organization named `dualworld`
- Option 2: Use your personal account (repo name: `yourusername.github.io`)

## 🚀 Quick Deploy

```bash
# 1. Create repository on GitHub
# Repository name: dualworld.github.io (IMPORTANT!)
# Public repository

# 2. Update content (before pushing)
# Edit index.html:
#   - Search: "https://github.com/yourrepo/dualworld" 
#   - Replace: "https://github.com/dualworld/dualworld.github.io"
#   - Update author info in Citation section

# 3. Initialize and push
git remote add origin https://github.com/dualworld/dualworld.github.io.git
git branch -M main
git push -u origin main

# 4. GitHub Pages will automatically deploy!
# No need to configure - it auto-serves main branch root for *.github.io repos
# Visit: https://dualworld.github.io (wait 1-2 minutes)
```

## 🛠 Local Development

```bash
# Start local server
python3 -m http.server 8000
# Open: http://localhost:8000
```

## 🎯 Features

- 🧠 Slow Thinker: Wan2.2 5B @ 1Hz for long-horizon predictions
- ⚡ Fast Reasoner: V-JEPA 600M @ 30Hz for real-time control
- 🎥 33-frame coherent video predictions (6.6 seconds)
- 🚀 120Hz control frequency with 4x prediction reuse

## 🔧 Troubleshooting

**Site not showing?**
- Check repository name is exactly `dualworld.github.io`
- Ensure repository is public
- Wait 1-2 minutes after pushing

**Videos not loading?**
- Verify files exist in `assets/demos/`
- Check browser console for errors

---

Built with ❤️ for the robotics research community
