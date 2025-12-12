# 🚀 DualWorld 网站部署 - 从这里开始

## 📦 你现在在这里

目录：`/home/lus/dualworld-website/`

包含文件：
- ✅ `index.html` - 网站主页
- ✅ `worldmind-style.css` - 样式表
- ✅ `worldmind-script.js` - 交互脚本
- ✅ `assets/` - 图片和视频资源
- ✅ `deploy.sh` - 自动部署脚本 ⭐
- ✅ Git 仓库已初始化

## 🎯 部署到 GitHub Pages 的 3 种方法

### 方法 1：使用自动部署脚本 (推荐！)

最简单的方式，一步到位：

```bash
cd /home/lus/dualworld-website
./deploy.sh
```

脚本会引导你：
1. 输入 GitHub 用户名
2. 输入仓库名称
3. 输入 Git 配置信息
4. 自动提交并推送代码

**前提条件**：需要先在 GitHub 创建仓库
👉 访问：https://github.com/new

---

### 方法 2：手动命令（完全控制）

#### 步骤 1: 在 GitHub 创建仓库
1. 访问 https://github.com/new
2. 仓库名：`dualworld` (或其他名称)
3. 选择 **Public**
4. **不要**勾选任何选项
5. 创建仓库

#### 步骤 2: 配置 Git
```bash
cd /home/lus/dualworld-website

# 设置用户信息
git config user.name "你的名字"
git config user.email "your.email@example.com"

# 添加远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

#### 步骤 3: 提交并推送
```bash
git add .
git commit -m "Initial commit: Add DualWorld project page"
git push -u origin main
```

#### 步骤 4: 启用 GitHub Pages
1. 在 GitHub 仓库页面
2. Settings → Pages
3. Source: `Deploy from a branch`
4. Branch: `main` + `/ (root)`
5. Save

#### 步骤 5: 访问网站
等待 1-2 分钟后访问：
`https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

### 方法 3：使用 GitHub CLI (如果已安装)

```bash
cd /home/lus/dualworld-website

# 创建仓库并推送（一条命令）
gh repo create dualworld --public --source=. --remote=origin --push

# 启用 Pages
gh repo edit --enable-pages --pages-branch main
```

---

## ⚠️ 重要提示

### 推送前需要更新的内容：

1. **GitHub 链接** (在 index.html 中)
   ```bash
   # 自动替换（替换 YOUR_USERNAME 和 YOUR_REPO）
   sed -i 's|yourrepo/dualworld|YOUR_USERNAME/YOUR_REPO|g' index.html
   ```

2. **作者信息** (在 index.html 的 Citation 部分)
   ```bash
   # 手动编辑或使用命令
   sed -i 's/Your Team/真实作者名/g' index.html
   ```

---

## 🔑 GitHub 认证

如果推送时提示认证失败，你需要：

### 选项 1: 使用个人访问令牌 (PAT)
1. 访问 https://github.com/settings/tokens
2. Generate new token (classic)
3. 勾选 `repo` 权限
4. 生成并复制令牌
5. 推送时用令牌代替密码

### 选项 2: 配置 SSH Key
```bash
# 生成 SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# 复制公钥
cat ~/.ssh/id_ed25519.pub

# 添加到 GitHub: Settings → SSH and GPG keys
```

然后使用 SSH URL：
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
```

---

## 📚 详细文档

- `DEPLOY_GUIDE.md` - 完整部署指南
- `README.md` - 项目说明

---

## 🎉 快速开始

最简单的方式：

```bash
cd /home/lus/dualworld-website
./deploy.sh
```

按照提示操作即可！

有问题？查看 `DEPLOY_GUIDE.md` 或在 GitHub 仓库创建 Issue。
