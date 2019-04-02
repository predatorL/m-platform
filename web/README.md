## 前端功能与路由设计
功能及路由设计如下 (暂时不支持注册)
1. 登录页
2. 登出
    1. 登出功能
3. 文章
    1. 查看主页：GET /posts
    2. 个人主页：GET /posts?author=xxx
    3. 查看一篇文章包含留言：GET /posts/:postId
4. 发表文章 POST /posts/create
