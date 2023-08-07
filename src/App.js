import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Notification from './components/UI/Notification'
import MainPage from './pages/MainPage'
import { countsGetRequest } from './store/actions/ActionCounts'

function App() {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(countsGetRequest())
   }, [])

   return (
      <div className="App">
         <MainPage />
         <Notification />
      </div>
   )
}

export default App
