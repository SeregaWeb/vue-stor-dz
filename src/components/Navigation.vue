<template>
  <nav id="Navigation">
      <ul>
          <li >
            <router-link to="/">shop</router-link>
          </li>
          <li >
            <router-link to="/basket">basket <span class="count-basket">{{countBasketStor}}</span></router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
import Stor from '@/store'

export default {
  name: 'Navigation',
  computed: {
    countBasketStor () {
      Stor.basketCount()
      return Stor.CountBasket
    }
  }
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
        position: relative;
    }
    .count-basket{
        position: absolute;
        right: -35px;
        width: 25px;
        height: 25px;
        top: -5px;
        background-color: blue;
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        font-size: 12px;
        align-items: center;
        font-weight: 900;
        font-family: monospace;
    }
</style>
