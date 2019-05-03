<template>
 <div>
   <navigation></navigation>
   <shop-item :data="StorArr" @remove="removeFromList"></shop-item>
 </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import ShopItem from '@/components/Shop_item'

export default {
  name: 'Shop',
  components: { Navigation, ShopItem },
  data: function () {
    return {
      StorArr: [
        {name: 'item1', price: 22.5},
        {name: 'item2', price: 23.5},
        {name: 'item3', price: 24.5}]
    }
  },
  methods: {
    removeFromList (id) {
      console.log(id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
