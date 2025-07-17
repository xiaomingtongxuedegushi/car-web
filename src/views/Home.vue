<template>
  <div id="app">
    <div class="mc-page-container">
      <home-left-bar />
      <div class="mc-page-right">
        <home-right-top />
        <home-right-content />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// eslint-disable-next-line camelcase
import bgColor_List from '@/assets/data/bgColor.json'
import HomeRightContent from './home_layout/HomeRightContent'
import HomeRightTop from './home_layout/HomeRightTop'
import HomeLeftBar from './home_layout/HomeLeftBar'

export default {
  name: 'home',
  components: { HomeLeftBar, HomeRightTop, HomeRightContent },
  data () {
    return {
      bagColor: '', // 背景色默认是青色
      secondColor: '',
      dialogVisible: false,
      isIndex: null,
      isIndex2: 0,
      // iframe: '', // 在右侧嵌入
      // open: '', // 打开一个新窗口
      // software: '', // 打开一个软件

      // 主题颜色
      colorList: []
    }
  },
  computed: {
    ...mapGetters([
      'iframeUrl',
      'baseUrl',
      'username',
      'password',
      'systemModel',
      'userName'
    ])
  },
  created () {
    this.colorList = bgColor_List.colorList
    this.bagColor = bgColor_List.bagColor
    this.secondColor = bgColor_List.secondColor
  },
  mounted () {
    if (this.systemModel === 1) {
      this.currentList = this.teachingList
    } else if (this.systemModel === 2) {
      this.currentList = this.trainingList
    } else if (this.systemModel === 3) {
      this.currentList = this.assessList
    } else if (this.systemModel === 4) {
      this.currentList = this.competitionList
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
