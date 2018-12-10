<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html,body,div,p,li,span,ul,nav,img,small,input,h1,h2,h3,h4,h5,h6,a{
  margin: 0;
  padding: 0; 
  list-style: none;
  text-decoration: none
}
@font-face {
    font-family: "SYhtf";
    src: url(../src/assets/font/SourceHanSansCN-ExtraLight.otf);
  }
html body{
  min-width: 375px;
  font-family: "SYhtf"
}
</style>
