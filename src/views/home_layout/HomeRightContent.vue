<template>
  <div class="mc-page-right-content">
    <div class="mc-page-right-content-container">
      <iframe  v-if="currentIframeUrl !== null" :src="currentIframeUrl" frameborder="0">您的浏览器暂不支持此功能</iframe>
      <HomeFastTool />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeFastTool from '@/views/home_layout/HomeFastTool'

export default {
  name: 'HomeRightContent',
  components: { HomeFastTool },
  computed: {
    ...mapGetters([
      'iframeUrl',
      'baseUrl',
      'username',
      'password',
      'systemModel',
      'userName',
      'theme'
    ]),
    // 生成当前iframe中的url
    currentIframeUrl () {
      let url = null
      if (this.iframeUrl && this.iframeUrl !== '') {
        // 处理URL前缀
        if (this.iframeUrl.indexOf('http://') !== -1 || this.iframeUrl.indexOf('https://') !== -1) {
          // 完整的URL，拼接学号（用于学生前端页面）
          url = this.iframeUrl + '?sid=' + this.username
          // this.$message.info(url)
        } else {
          // 非完整的URL，添加前缀并拼接用户名和密码（用于后台管理系统）

          // URL编码真正要跳转到的url
          const relayUrl = encodeURIComponent(this.baseUrl + this.iframeUrl)

          // 拼接完整的URL
          url = this.baseUrl + '/toPage/?username=' + this.username + '&password=' + this.password + '&url=' + relayUrl
        }

        // 尾部添加时间戳，防止https问题以及缓存问题
        if (url.indexOf('?') !== -1) {
          url = url + '&_t=' + new Date().getTime()
        } else {
          url = url + '?_t=' + new Date().getTime()
        }
      }

      // this.$message.info(url)

      return url
    }
  }
}
</script>

<style scoped>

</style>
