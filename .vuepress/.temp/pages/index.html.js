import comp from "/Users/krin/dev/docPage/X-Chat-docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"X-Chat\",\"slug\":\"x-chat\",\"link\":\"#x-chat\",\"children\":[]},{\"level\":2,\"title\":\"声明\",\"slug\":\"声明\",\"link\":\"#声明\",\"children\":[]},{\"level\":2,\"title\":\"近期大型更新计划\",\"slug\":\"近期大型更新计划\",\"link\":\"#近期大型更新计划\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
