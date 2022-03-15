import React from 'react'
import Sidebar from '../../components/adminComponents/Sidebar'
import HeaderAdmin from '../../components/adminComponents/HeaderAdmin'
import OrderMain from '../../components/adminComponents/orders/OrderMain'

const AdminOrderScreen = () => {

  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <HeaderAdmin />
        <OrderMain />
      </main>
    </>
  )
}

export default AdminOrderScreen