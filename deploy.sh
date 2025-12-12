#!/bin/bash

echo "🚀 DualWorld GitHub Pages 部署助手"
echo "=================================="
echo ""

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误：请在 dualworld-website 目录下运行此脚本"
    exit 1
fi

# 检查 Git 状态
if [ ! -d ".git" ]; then
    echo "❌ 错误：Git 仓库未初始化"
    exit 1
fi

# 获取用户输入
echo "请输入你的 GitHub 用户名："
read -p "> " username

echo ""
echo "请输入仓库名称（建议: dualworld 或 dualworld-project）："
read -p "> " reponame

echo ""
echo "请输入你的姓名（用于 Git 提交）："
read -p "> " name

echo ""
echo "请输入你的邮箱（用于 Git 提交）："
read -p "> " email

echo ""
echo "======================================"
echo "配置信息："
echo "  GitHub 用户名: $username"
echo "  仓库名称: $reponame"
echo "  提交者: $name <$email>"
echo "======================================"
echo ""
read -p "确认无误？(y/n) " confirm

if [ "$confirm" != "y" ]; then
    echo "已取消"
    exit 0
fi

# 设置 Git 用户信息
git config user.name "$name"
git config user.email "$email"

# 更新文件中的链接（可选）
echo ""
echo "📝 正在更新文件中的链接..."
sed -i "s|https://github.com/yourrepo/dualworld|https://github.com/$username/$reponame|g" index.html 2>/dev/null || true

# 添加远程仓库
echo ""
echo "🔗 添加远程仓库..."
git remote add origin "https://github.com/$username/$reponame.git" 2>/dev/null || \
git remote set-url origin "https://github.com/$username/$reponame.git"

# 添加所有文件
echo ""
echo "📦 添加文件..."
git add .

# 提交
echo ""
echo "💾 提交更改..."
git commit -m "Initial commit: Add DualWorld project page"

# 推送
echo ""
echo "⬆️  推送到 GitHub..."
echo "如果需要，请输入 GitHub 密码或个人访问令牌"
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！"
    echo ""
    echo "======================================"
    echo "下一步："
    echo "1. 访问 https://github.com/$username/$reponame"
    echo "2. 点击 Settings → Pages"
    echo "3. Source 选择 'Deploy from a branch'"
    echo "4. Branch 选择 'main' + '/ (root)'"
    echo "5. 点击 Save"
    echo ""
    echo "等待 1-2 分钟后访问："
    echo "https://$username.github.io/$reponame/"
    echo "======================================"
else
    echo ""
    echo "❌ 推送失败"
    echo ""
    echo "可能的原因："
    echo "1. 仓库尚未在 GitHub 创建"
    echo "2. 认证失败（需要个人访问令牌）"
    echo "3. 网络问题"
    echo ""
    echo "请先在 GitHub 创建仓库："
    echo "https://github.com/new"
fi
