import React from 'react'
import HeaderAdmin from '../../components/adminComponents/HeaderAdmin'
import Sidebar from '../../components/adminComponents/Sidebar'
import Main from '../../components/adminComponents/Dashboard/Main'

const DashboardScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <HeaderAdmin />
        <Main />
      </main>
    </>
  )
}

export default DashboardScreen