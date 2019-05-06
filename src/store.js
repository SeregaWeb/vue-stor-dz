import Vue from 'vue'

export default new Vue({
  data () {
    return {
      ShopItems: [{name: 'item1', price: 22.5},
        {name: 'item2', price: 23.5},
        {name: 'item3', price: 24.5}],
      Basket: JSON.parse(localStorage.shopVue || '[]'),
      CountBasket: 0
    }
  },
  methods: {
    basketCount () {
      var countB = 0
      this.Basket.forEach(function (value) {
        countB += value.count
      })
      this.CountBasket = countB
    }
  },
  created () {
    this.CountBasket = this.basketCount()
  }
})
