<template>
    <div>
    <navigation></navigation>
    <ul class="basket">
          <li></li>
    </ul>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'Basket',
  components: {Navigation}
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
