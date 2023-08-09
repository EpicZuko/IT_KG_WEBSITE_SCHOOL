import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AcceptanceAdmin from './components/acceptance/AcceptanceAdmin'
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
         <AcceptanceAdmin />

         <Notification />
      </div>
   )
}

export default App
