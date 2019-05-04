<template>
 <div>
   <navigation :count="basketCount"></navigation>
   <shop-item :data="StorArr" @addItem="addFromBasket"></shop-item>
 </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import ShopItem from '@/components/Shop_item'
import Stor from '@/store'

export default {
  name: 'Shop',
  components: { Navigation, ShopItem },
  data: function () {
    return {
      StorArr: Stor,
      basket: JSON.parse(localStorage.shopVue || '[]')
    }
  },
  methods: {
    saveBasket () {
      localStorage.shopVue = JSON.stringify(this.basket)
    },
    addFromBasket (id) {
      var fl = false
      for (var i = 0; i < this.basket.length; i++) {
        if (id === this.basket[i].id) {
          fl = true
        }
      }
      if (fl === false) {
        var newItem = {
          name: this.StorArr[id].name,
          price: this.StorArr[id].price,
          id: id,
          count: 1
        }
        this.basket.push(newItem)
      } else {
        let count = this.basket[id].count
        count++
        this.$set(this.basket[id], 'count', count)
        this.saveBasket()
      }
      console.log(this.basket)
    }
  },
  computed: {
    basketCount: function () {
      var countB = 0
      this.basket.forEach(function (value) {
        countB += value.count
      })
      return countB
    }
  },
  watch: {
    basket: function () {
      this.saveBasket()
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
