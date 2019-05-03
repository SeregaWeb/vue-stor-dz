<template>
  <nav id="Navigation">
      <ul>
          <li >
            <router-link to="/">shop</router-link>
          </li>
          <li >
            <router-link to="/basket">basket</router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
    #Navigation{
        width: 100%;
    }
    ul{
        list-style: none;
        display: flex;
    }
    li{
        margin: 0 20px;
    }
</style>
