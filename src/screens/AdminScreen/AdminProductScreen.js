import React from 'react'
import Sidebar from './../../components/adminComponents/Sidebar';
import HeaderAdmin from './../../components/adminComponents/HeaderAdmin';
import MainProducts from '../../components/adminComponents/products/MainProducts';
const AdminProductScreen = () => {
  return (
    <>
    <Sidebar />
    <main className="main-wrap">
      <HeaderAdmin />
      <MainProducts />
    </main>
    </>
  )
}

export default AdminProductScreen