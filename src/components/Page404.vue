<template>
  <div class="full-page">
      <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'page404',
  data: function () {
    return {
      msg: 'Page not found'
    }
  }
}
</script>

<style scoped>

.full-page{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
h1{
    font-size: 52px;
    text-transform: uppercase;
    color: darkblue;
}

</style>
