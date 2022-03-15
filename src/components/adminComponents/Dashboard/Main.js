import React from 'react'
import ProductsStatistics from './ProductsStatistics'
import SalesStatistics from './SalesStatistics'
import TopTotal from './TopTotal'
import LatestOrder from './LatestOrder'
import { useSelector } from 'react-redux';
const Main = () => {
  const orderListAdmin = useSelector((state) => state.orderListAdmin)
  const { loading, error, orders } = orderListAdmin

  const productListAdmin = useSelector((state) => state.productListAdmin);
  const { products } = productListAdmin;
  return (
    <>
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title"> Dashboard </h2>
      </div>
      {/* Top Total */}
      <TopTotal orders={orders} products={products} />

      <div className="row">
        {/* STATICS */}
        <SalesStatistics />
        <ProductsStatistics />
      </div>

      {/* LATEST ORDER */}
      <div className="card mb-4 shadow-sm">
        <LatestOrder orders={orders} loading={loading} error={error}/>
      </div>
    </section>
  </>
  )
}

export default Main