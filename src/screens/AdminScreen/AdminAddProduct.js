import React from 'react'
import Sidebar from '../../components/adminComponents/Sidebar'
import HeaderAdmin from '../../components/adminComponents/HeaderAdmin'
import AddProductMain from '../../components/adminComponents/products/AddProductMain'
const AdminAddProduct = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <HeaderAdmin />
        <AddProductMain />
      </main>
    </>
  )
}

export default AdminAddProduct