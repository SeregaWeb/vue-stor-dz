<template>
    <div>
    <navigation></navigation>
    <ul class="basket">
          <li v-for="item in Basket" :key="item.id">
              <h1>{{item.name}}</h1>
              <p>{{item.price}}</p>
              <p>{{item.count}}</p>
              <button>delete to basket</button>
          </li>
    </ul>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Stor from '@/store'

export default {
  name: 'Basket',
  components: {Navigation},
  data () {
    return {
      Basket: Stor.Basket
    }
  }
}
</script>

<style scoped>
    ul{
        display: flex;
        list-style: none;
    }
    li{
        margin: 0 20px;
    }
</style>
