import comp from "D:/AAA-Krin/Development/个人html开发/krin2024/docPage/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"X-Chat\",\"slug\":\"x-chat\",\"link\":\"#x-chat\",\"children\":[]},{\"level\":2,\"title\":\"声明\",\"slug\":\"声明\",\"link\":\"#声明\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
