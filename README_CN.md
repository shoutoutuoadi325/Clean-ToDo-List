# 提醒事项(PWA ToDo)

[English Version](README_EN.md)

一个基于 PWA 技术的简单提醒事项小程序，可以添加、删除、标记完成，并支持离线使用和安装。

## 特性

- 添加/删除提醒事项
- 点击事项切换完成状态
- 使用 localStorage 持久化数据
- Service Worker 缓存静态资源，实现离线可用
- Web App Manifest 支持安装为独立应用
- 浏览器标签页图标（favicon）支持
- 多语言支持

## 文件说明

已添加 favicon 图标支持，浏览器标签页将显示应用图标。

```text
.
├─ index.html      页面入口，注册 Service Worker 和加载脚本
├─ main.css        基础样式
├─ app.js          业务逻辑：增删改查与数据持久化
├─ sw.js           Service Worker：缓存资源并拦截网络请求
├─ manifest.json   PWA 应用清单，配置图标、主题色等
└─ icons/          存放应用图标（192x192、512x512）
```

## 安装与运行

1. 全局安装静态服务器（若未安装）：
   ```powershell
   npm install -g http-server
   ```
2. 切换到项目根目录：
   ```powershell
   cd C:\Users\zhiqi\OneDrive\development\ToDo
   ```
3. 启动服务器并禁用缓存：
   ```powershell
   http-server -c-1
   ```
4. 浏览器访问： http://localhost:8080

## PWA 安装

在支持 PWA 的浏览器地址栏或菜单中选择“安装”即可将应用添加到设备，支持离线使用和开机启动。


