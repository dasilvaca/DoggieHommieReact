import React from 'react'

const Post = ({photo,title}) => {
  return (
    <div className="card mb-3 mt-2" style={{width: "674px", height :"200px"}}>
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

        <h5 className="card-title" style={{
        width: "auto",
        height: "auto",
        whiteSpace: "pre",
        textShadow: "0px 1px 2px rgba(0, 0, 0, 0.83)",
        fontWeight: 400,
        fontStyle: "normal",
        fontFamily: `"DM Sans", sans-serif`,
        color: "#000000",
        fontSize: 24,
        letterSpacing: 0,
        lineHeight: 1.2,
        textDecoration: "underline",
        }}>{title}</h5>

        <p className="card-text" style={{
        width: 500,
        height: 118,
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
        wordBreak: "break-word",
        fontWeight: 400,
        fontStyle: "normal",
        fontFamily: `"DM Sans", sans-serif`,
        color: "#000000",
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 1.2,
        textAlign: "justify",
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,  sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      </div>
    </div>
  </div>
</div>
  )
}

export default Post