<template>
  <div class="home">
    <Meal msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Meal from '@/components/Meal.vue'

export default {
  name: 'Home',
  components: {
    Meal
  }
}
</script>
