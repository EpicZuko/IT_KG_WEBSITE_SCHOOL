import React from 'react'
import { Alert, Snackbar } from '@mui/material'

const SnackbarMui = ({ isOpen, handleClose, severity, message }) => {
   return (
      <Snackbar open={isOpen} autoHideDuration={4000} onClose={handleClose}>
         <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: '100%' }}
         >
            {message}
         </Alert>
      </Snackbar>
   )
}

export default SnackbarMui
