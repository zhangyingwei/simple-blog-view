<template>
  <header class="header typo">
    <div class="title"> 
      <img src="@/assets/images/title-bg.png" alt="">
    </div>
    <div class="center"></div>
    <div class="actions">
      <a class="action-item active" @click="changeRoute" action-key="main" href="#">首页</a>
      <a class="action-item" @click="changeRoute" href="#" action-key="aboutme">关于我</a>
    </div>
  </header>
  <article class="article typo">
    {{actionActive}}
    <router-view></router-view>
  </article>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'App',
  components: {},
  data() {
    return {
      actions: {
        active: "main"
      }
    }
  },
  setup() {
    const actionActive = ref('main')
    const changeRoute = (e) => {
      actionActive.value = e.target.getAttribute("action-key");
    }
    return {
      state: {
        actionActive
      },
      changeRoute
    }
  }
}
</script>

<style lang="less">
#app {
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
}
html,body {
  height: 100%;
}
.header {
  border-bottom: 1px solid rgba(168, 168, 168, 0.2);
  position:sticky;
	top:0px;
  background-color: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  .title {
    // font-size: 24px;
    display: inline-block;
    text-align: left;
    width: 100px;
    align-items: center;
    img {
      height: 35px;
      align-items: center;
    }
  }
  .center {
    display: inline-block;
    width: calc(100% - 500px);
  }
  .actions {
    text-align: right;
    width: 400px;
    display: inline-block;
    a {
      position: relative;
      border: 0;
      &:link,&:visited,&:hover,&:active {
        text-decoration: none;
      }
      
      &.action-item {
        &.active {
          &::after {
            content: "";
            display: block;
            width: calc(100% - 12px);
            margin-left: 6px;
            border-radius: 5px;
            height: 10px;
            position: absolute;
            bottom: -2px;
            left: 0px;
            background-color: #61c9b4;
            z-index: -1;
          }
        }
        color: #000;
        margin: 0 5px;
      }
    }
  }
}
.article {
  height: 100%;
  padding: 10px;
  background-color: #f9f9f9;
}
</style>
