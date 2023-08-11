import React from 'react'
import AcceptanceAdmin from '../components/acceptance/AcceptanceAdmin'
import AdminForm from '../components/adminForm/AdminForm'
import AdminCard from '../components/card/AdminCard'

const AdminPage = () => {
   return (
      <div>
         <AdminForm />
         <AdminCard />
         <AcceptanceAdmin />
      </div>
   )
}

export default AdminPage
