<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container{
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin: 0 auto;
  width: 1440px;
  height: 1024px;
  background: #F9F9F9;
}
</style>
