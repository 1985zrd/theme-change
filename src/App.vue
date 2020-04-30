<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="changeColor('#FF6800')">默认</button>
    <button @click="changeColor('#ff0000')">红</button>
    <button @click="changeColor('#f6ff00')">黄</button>
    <button @click="changeColor('#0012ff')">蓝</button>
    <p class="text">新华社北京4月29日电 中共中央政治局常务委员会4月29日召开会议，分析国内外新冠肺炎疫情防控形势，研究部署完善常态化疫情防控举措，研究确定支持湖北省经济社会发展一揽子政策。中共中央总书记习近平主持会议并发表重要讲话。</p>
    <p class="msg">hahahah</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { updateTheme } from '@/utils/changeTheme/settingConfig'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    this.changeColor('#FF6800')
  },
  methods: {
    changeColor (color) {
      let c = typeof color === 'string' ? color : color.hex
      updateTheme(c)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.text {
  color: #FF6800;
}
.msg {
  background-color: rgba(255, 104, 0, 0.5);
}
</style>
