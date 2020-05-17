import axios from 'axios'
import Meal from '@/interfaces/Meal'

class MealService {
  async FetchMeal (): Promise<Meal[] | any[]> {
    let response: Meal[] | any[] = []
    try {
      const { data, status } = await axios({
        url: process.env.VUE_APP_API
      })

      if (data && status === 200) {
        response = data.meals
      }
      return response
    } catch (error) {
      response = [
        {
          error: error.response as object,
          flag: false as boolean,
          generalError: 'An error happened' as string
        }
      ]
      return response
    }
  }
}

export default MealService