<template>
    <ul>
        <li v-for="(item, key) in data" :key="key">
            <span>{{key}}:код товара</span><p>{{item.name}}</p>
            <p>{{item.price}}</p>
            <button type="button" @click="addItem(key)">Add basket</button>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'Shop-item',
  props: ['data'],
  methods: {
    addItem: function (key) {
      this.$emit('addItem', key)
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
  margin: 0 10px;
  padding: 5px;
  border: 1px solid #f3f3f3;
}
a {
  color: #42b983;
}
</style>
