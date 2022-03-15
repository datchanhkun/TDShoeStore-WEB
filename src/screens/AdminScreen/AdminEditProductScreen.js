import React from 'react'
import Sidebar from '../../components/adminComponents/Sidebar'
import HeaderAdmin from '../../components/adminComponents/HeaderAdmin'
import EditProductMain from '../../components/adminComponents/products/EditProductMain'
import { useParams} from "react-router-dom"
const AdminEditProductScreen = () => {
  const { id } = useParams()
  return (
    <>
    <Sidebar />
    <main className="main-wrap">
      <HeaderAdmin />
      <EditProductMain productId={id} />
    </main>
    </>
  )
}

export default AdminEditProductScreen