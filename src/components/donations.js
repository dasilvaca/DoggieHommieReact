import React from 'react'

const Donation = ({ photo, title, description }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "1000px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={photo} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donation