import React from 'react'

const SalesStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
    <div className="card mb-4 shadow-sm">
      <article className="card-body">
        <h5 className="card-title">Sale statistics</h5>
        <iframe
          title="Chart Orders" 
          style={{
            background: "#FFFFFF",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            width: "100%",
            height: "350px",
          }}
          src="https://charts.mongodb.com/charts-shoe-ecommerce-celqu/embed/charts?id=622d8ac2-f865-47dc-8b2b-66f750123bcd&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
      </article>
    </div>
  </div>
  )
}

export default SalesStatistics