import { URL_BASE } from '../utils/constants/category'

const jwt =
   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIGRldGFpbHMiLCJpc3MiOiJlbG1pcnplbnMiLCJleHAiOjE2OTQyODYxMjksImlhdCI6MTY5MTYwNzcyOSwidXNlcm5hbWUiOiJzdHJpbmcifQ.TFEdPIP1J9GxH8u2iqHcwj7r8f_oIP1bLKRaYNJmX8U'
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
      return response.json()
   } catch (error) {
      throw new Error(error.message)
   }
}
