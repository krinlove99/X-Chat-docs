export const themeData = JSON.parse("{\"docsBranch\":\"main\",\"lastUpdated\":false,\"contributors\":false,\"prevLink\":true,\"logo\":\"/images/lan1.png\",\"navbar\":[{\"text\":\"文档首页\",\"link\":\"/docs/1/X-Chat介绍.md\"},{\"text\":\"X-Chat智能助理😍\",\"link\":\"https://xchat.rntec.top\"},{\"text\":\"X-Chat官网\",\"link\":\"https://rntec.top\"},{\"text\":\"历史更新\",\"link\":\"https://rntec.top/loginfo.aspx\"}],\"sidebar\":[{\"text\":\"BASETEC X-Chat 使用文档\",\"children\":[{\"text\":\"介绍\",\"children\":[{\"text\":\"X-Chat\",\"link\":\"/README.md\"}]},{\"text\":\"快速使用\",\"children\":[{\"text\":\"注册账户\",\"link\":\"/docs/2/注册账户.md\"},{\"text\":\"获取令牌\",\"link\":\"/docs/2/获取令牌.md\"},{\"text\":\"客户端配置\",\"link\":\"/docs/2/客户端配置.md\"}]},{\"text\":\"其他配置\",\"children\":[{\"text\":\"查询额度使用日志\",\"link\":\"/docs/3/查询额度使用日志.md\"},{\"text\":\"查看剩余额度及兑换额度\",\"link\":\"/docs/3/查看剩余额度及兑换额度.md\"}]},{\"text\":\"进阶功能\",\"children\":[{\"text\":\"免登录“快速聊天”功能介绍（暂时下线）\",\"link\":\"/docs/4/免登录“快速聊天”功能介绍（暂时下线）.md\"},{\"text\":\"模型插件市场开放\",\"link\":\"/docs/4/模型插件市场开放.md\"},{\"text\":\"X-Chat聊天记录云同步\",\"link\":\"/docs/4/X-Chat聊天记录云同步.md\"}]},{\"text\":\"模型介绍\",\"children\":[{\"text\":\"模型倍率公示\",\"link\":\"/docs/5/模型倍率公示.md\"}]},{\"text\":\"其他问题\",\"children\":[{\"text\":\"账号问题\",\"link\":\"/docs/6/账号问题.md\"},{\"text\":\"Token奖励\",\"link\":\"/docs/6/活动福利、系统赠送额度.md\"}]}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}