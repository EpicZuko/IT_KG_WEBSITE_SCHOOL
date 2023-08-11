import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Notification from './components/UI/Notification'
import AdminPage from './pages/AdminPage'
import MainPage from './pages/MainPage'
import { AcceptanceGet } from './store/actions/AcceptanceAction'
import { countsGetRequest } from './store/actions/ActionCounts'
import { socialNetworksGet } from './store/actions/ActionSocialNetworks'

function App() {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(countsGetRequest())
      dispatch(AcceptanceGet())
      dispatch(socialNetworksGet())
   }, [])

   return (
      <div className="App">
         <MainPage />
         <AdminPage />

         <Notification />
      </div>
   )
}

export default App
