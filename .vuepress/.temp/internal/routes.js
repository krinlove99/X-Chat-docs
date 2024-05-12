export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/docs/2/%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE.html", { loader: () => import(/* webpackChunkName: "客户端配置.html" */"D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/docs/2/客户端配置.html.js"), meta: {"title":""} }],
  ["/docs/2/%E6%B3%A8%E5%86%8C%E8%B4%A6%E6%88%B7.html", { loader: () => import(/* webpackChunkName: "注册账户.html" */"D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/docs/2/注册账户.html.js"), meta: {"title":""} }],
  ["/docs/2/%E8%8E%B7%E5%8F%96%E4%BB%A4%E7%89%8C.html", { loader: () => import(/* webpackChunkName: "获取令牌.html" */"D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/docs/2/获取令牌.html.js"), meta: {"title":""} }],
  ["/docs/3/%E6%9F%A5%E7%9C%8B%E5%89%A9%E4%BD%99%E9%A2%9D%E5%BA%A6%E5%8F%8A%E5%85%91%E6%8D%A2%E9%A2%9D%E5%BA%A6.html", { loader: () => import(/* webpackChunkName: "查看剩余额度及兑换额度.html" */"D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/docs/3/查看剩余额度及兑换额度.html.js"), meta: {"title":""} }],
  ["/docs/3/%E6%9F%A5%E8%AF%A2%E9%A2%9D%E5%BA%A6%E4%BD%BF%E7%94%A8%E6%97%A5%E5%BF%97.html", { loader: () => import(/* webpackChunkName: "查询额度使用日志.html" */"D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/docs/3/查询额度使用日志.html.js"), meta: {"title":""} }],
  ["/docs/4/X-Chat%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E4%BA%91%E5%90%8C%E6%AD%A5.html", { loader: () => import(/* webpackChunkName: "X-Chat聊天记录云同步.html" */"D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/docs/4/X-Chat聊天记录云同步.html.js"), meta: {"title":""} }],
  ["/docs/4/%E5%85%8D%E7%99%BB%E5%BD%95%E2%80%9C%E5%BF%AB%E9%80%9F%E8%81%8A%E5%A4%A9%E2%80%9D.html", { loader: () => import(/* webpackChunkName: "免登录“快速聊天”.html" */"D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/docs/4/免登录“快速聊天”.html.js"), meta: {"title":""} }],
  ["/docs/4/%E6%A8%A1%E5%9E%8B%E5%A4%9A%E6%A8%A1%E6%80%81%E5%8A%9F%E8%83%BD.html", { loader: () => import(/* webpackChunkName: "模型多模态功能.html" */"D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/docs/4/模型多模态功能.html.js"), meta: {"title":""} }],
  ["/docs/5/%E6%A8%A1%E5%9E%8B%E5%80%8D%E7%8E%87%E5%85%AC%E7%A4%BA.html", { loader: () => import(/* webpackChunkName: "模型倍率公示.html" */"D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/docs/5/模型倍率公示.html.js"), meta: {"title":""} }],
  ["/docs/7/%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84AI%E8%81%8A%E5%A4%A9.html", { loader: () => import(/* webpackChunkName: "搭建你的AI聊天.html" */"D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/docs/7/搭建你的AI聊天.html.js"), meta: {"title":""} }],
  ["/docs/6/%E6%B4%BB%E5%8A%A8%E7%A6%8F%E5%88%A9%E3%80%81%E7%B3%BB%E7%BB%9F%E8%B5%A0%E9%80%81%E9%A2%9D%E5%BA%A6.html", { loader: () => import(/* webpackChunkName: "活动福利、系统赠送额度.html" */"D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/docs/6/活动福利、系统赠送额度.html.js"), meta: {"title":""} }],
  ["/docs/6/%E8%B4%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html", { loader: () => import(/* webpackChunkName: "账号问题.html" */"D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/docs/6/账号问题.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
