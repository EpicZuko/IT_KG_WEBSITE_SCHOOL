import { URL_BASE } from '../utils/constants/category'

const jwt =
   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIGRldGFpbHMiLCJpc3MiOiJlbG1pcnplbnMiLCJleHAiOjE2OTM2NzcwMjAsImlhdCI6MTY5MDk5ODYyMCwidXNlcm5hbWUiOiJzdHJpbmcifQ.BFpMKQFGBt4chGJLqdihvVpr6XFYHxgePNYnrcY9IoA'
export const fetchApi = async (data) => {
   try {
      const requestOptions = {
         method: data.method || 'GET',
         headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
         },
      }
      if (data.method !== 'GET' && data.body) {
         requestOptions.body = JSON.stringify(data.body)
      }
      const response = await fetch(URL_BASE + data.url, requestOptions)

      if (!response.ok) {
         throw new Error(response.message)
      }
      const result = await response.json()

      console.log(result)

      return result
   } catch (error) {
      throw new Error(error.message)
   }
}
