import React from 'react'

const Post = ({photo,title, description}) => {
  return (
    <div className="card mb-3 mt-2" style={{width: "674px", height :"max-content"}}>
  <div className="row g-0">
    <div className="col-md-2" >

      <img src={photo} className="img-fluid" alt="..." 
      style={{backgroundRepeat: "no-repeat",backgroundPosition: "50%",
      borderRadius: "50%",
      backgroundSize: "100% auto", 
      height : "100px", 
      margin:"10px"}}/>

    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 className="card-title" >{title}</h5>
      <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Post