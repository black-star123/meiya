<template>
  <div id="app">
    <topbar></topbar>
    <transition :name="transitionName">
      <router-view class="Router"/>
    </transition>
  </div>
</template>

<script>
import topbar from "./components/common/topbar";
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right"
    };
  },
  watch: {
    $route(to, from) {
      let isback = this.$router.isback;
      if (isback) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
      this.$router.isback = false;
    }
  },
  components: {
    topbar
  }
};
</script>

<style>
html,
body,
div,
p,
li,
span,
ul,
nav,
img,
small,
input,
h1,
h2,
h3,
h4,
h5,
h6,
a {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
@font-face {
  font-family: "SYhtf";
  src: url(../src/assets/font/SourceHanSansCN-ExtraLight.otf);
}
html,body {
  min-width: 375px;
  font-family: "SYhtf";
}
body > div {
  margin-top: 50px !important;
}

.Router {
  position: absolute;
  width: 100%;
  transition: width 0.25s ease;
  min-width: 375px !important;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
