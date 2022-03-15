import React from 'react'
import Sidebar from '../../components/adminComponents/Sidebar'
import HeaderAdmin from '../../components/adminComponents/HeaderAdmin'
import MainCategories from '../../components/adminComponents/Categories/MainCategories'
const AdminCategoriesScreen = () => {
  return (
    <>
    <Sidebar />
    <main className="main-wrap">
      <HeaderAdmin />
      <MainCategories />
    </main>
    </>
  )
}

export default AdminCategoriesScreen