import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SnackbarMui from './components/UI/SnackbarMui'
import MainPage from './pages/MainPage'
import { countsGetRequest } from './store/actions/ActionCounts'
import { actionsUiSlice } from './store/slices/uiSlice'

function App() {
   const snackbar = useSelector((state) => state.uiSnackbar)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(countsGetRequest())
   }, [])

   return (
      <div className="App">
         <SnackbarMui
            isOpen={snackbar.isOpen}
            severity={snackbar.severity}
            message={snackbar.message}
            handleClose={() => dispatch(actionsUiSlice.closeSnackbar())}
         />
         <MainPage />
      </div>
   )
}

export default App
