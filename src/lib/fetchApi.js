import { URL_BASE } from '../utils/constants/category'

export const fetchApi = async (data) => {
   try {
      const requestOptions = {
         method: data.method || 'GET',
         // headers: 'Content-Type': 'application/json'
      }
      if (data.method !== 'GET' && data.body) {
         requestOptions.body = JSON.stringify(data.body)
      }
      const response = await fetch(URL_BASE + data.url, requestOptions)
      if (!response.ok) {
         throw new Error(response.message)
      }
      return response.json()
   } catch (error) {
      throw new Error(error.message)
   }
}
