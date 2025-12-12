# DualWorld GitHub Pages 部署指南

## �� 当前状态
✅ Git 仓库已初始化
✅ 网页文件已准备就绪
⏳ 等待推送到 GitHub

## 🚀 部署步骤

### 步骤 1: 在 GitHub 创建新仓库

1. 访问 https://github.com/new
2. 仓库名称建议：`dualworld` 或 `dualworld-project`
3. 描述：`DualWorld: Dual-System World Models for Embodied AI`
4. 选择 **Public** (GitHub Pages 需要公开仓库或 Pro 账户)
5. ❌ **不要**勾选 "Add a README file"
6. ❌ **不要**选择 .gitignore 和 license
7. 点击 **Create repository**

### 步骤 2: 连接本地仓库到 GitHub

复制 GitHub 显示的仓库 URL，然后运行：

```bash
cd /home/lus/dualworld-website

# 添加远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 或者使用 SSH（如果已配置 SSH key）
# git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
```

### 步骤 3: 提交并推送代码

```bash
# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Add DualWorld project page"

# 推送到 GitHub
git push -u origin main
```

如果推送失败，可能需要先设置用户信息：
```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### 步骤 4: 启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 **Settings** (设置)
2. 在左侧菜单找到 **Pages**
3. 在 "Build and deployment" 下：
   - Source: 选择 **Deploy from a branch**
   - Branch: 选择 **main** 分支，文件夹选择 **/ (root)**
   - 点击 **Save**

4. 等待 1-2 分钟，页面会显示：
   ```
   Your site is live at https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```

### 步骤 5: 访问网站

访问：`https://YOUR_USERNAME.github.io/YOUR_REPO/`

🎉 完成！

## 🔧 可选配置

### 自定义域名（可选）

如果你有自己的域名：

1. 在仓库根目录创建 `CNAME` 文件：
   ```bash
   echo "dualworld.yoursite.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. 在域名 DNS 设置中添加 CNAME 记录：
   ```
   Type: CNAME
   Name: dualworld (或 www)
   Value: YOUR_USERNAME.github.io
   ```

3. 在 GitHub Pages 设置中输入自定义域名

## 📝 更新网站

以后要更新网站内容：

```bash
cd /home/lus/dualworld-website

# 修改文件后...

git add .
git commit -m "Update: 描述你的更改"
git push
```

GitHub Pages 会自动重新部署（约 1-2 分钟）。

## ⚠️ 重要提示

### 在推送前，请更新以下内容：

1. **index.html** 中的 GitHub 链接（搜索 `yourrepo`）
2. **index.html** 中的作者信息（搜索 `Your Team`）
3. **README.md** 中的仓库链接

可以使用以下命令批量替换：

```bash
# 替换 GitHub 链接
sed -i 's|https://github.com/yourrepo/dualworld|https://github.com/YOUR_USERNAME/YOUR_REPO|g' index.html

# 替换作者信息
sed -i 's/author={Your Team}/author={真实作者名}/g' index.html
```

## 🔍 故障排除

### 问题：推送失败 "Permission denied"
**解决**：
- 检查 GitHub 登录状态
- 使用 HTTPS 时可能需要个人访问令牌（PAT）
- 或配置 SSH key

### 问题：页面 404
**解决**：
- 等待几分钟让 GitHub Pages 部署
- 检查 Settings → Pages 是否正确配置
- 确保仓库是 Public

### 问题：样式/图片不显示
**解决**：
- 检查浏览器控制台错误
- 确保文件路径正确
- 清除浏览器缓存

## 📚 相关资源

- GitHub Pages 文档: https://docs.github.com/pages
- Git 教程: https://git-scm.com/doc
- 问题反馈: 在仓库创建 Issue

---

准备好了吗？开始执行步骤 1！
