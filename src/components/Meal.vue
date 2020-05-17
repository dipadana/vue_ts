<template>
  <div class="hello flex flex-center">
    <div class="col-12 col-sm-10 col-md-8">
      <q-card class="full-width">
        <q-img
          :src="meal[0].strMealThumb"
          :ratio="16/9"
        />
        <q-card-section>
          <div class="text-h6">{{ meal[0].strMeal }}</div>
        </q-card-section>
        <q-separator/>
        <q-card-actions class="bg-grey-2">
          <q-btn
            flat
            color="primary"
            label="Refresh"
            @click="fetchData()"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from '@vue/composition-api'
  import Meal from './../interfaces/Meal'
  import MealService from './../services/MealService'
  const mealService = new MealService()

  export default defineComponent({
    setup () {

      const { meal, fetchData } = useFetchData()

      return {
        meal,
        fetchData
      }
    }
  })

  function useFetchData (): any {
    const meal = ref<Meal[]>([])

    const fetchData = async (): Promise<void> => {
      console.log('Try to get data')
      meal.value = await mealService.FetchMeal()
      console.log('Finish to get data')
    }

    fetchData()

    return {
      meal,
      fetchData
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
