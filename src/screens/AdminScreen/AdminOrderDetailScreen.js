import React from 'react'
import Sidebar from '../../components/adminComponents/Sidebar'
import HeaderAdmin from '../../components/adminComponents/HeaderAdmin'
import OrderDetailMain from '../../components/adminComponents/orders/OrderDetailMain'
import { useParams } from 'react-router-dom';
const AdminOrderDetailScreen = () => {
  const { id } = useParams()
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <HeaderAdmin />
        <OrderDetailMain orderId={id} />
      </main>
    </>
  )
}

export default AdminOrderDetailScreen