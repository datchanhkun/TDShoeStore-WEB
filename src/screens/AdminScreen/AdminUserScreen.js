import React from 'react'
import Sidebar from '../../components/adminComponents/Sidebar'
import HeaderAdmin from '../../components/adminComponents/HeaderAdmin'
import UserComponent from '../../components/adminComponents/users/UserComponent'

const AdminUserScreen = () => {
  return (
    <>
    <Sidebar />
    <main className="main-wrap">
      <HeaderAdmin />
      <UserComponent />
    </main>
    </>
  )
}

export default AdminUserScreen