import React from 'react'
import LayOut from '../Layout/LayOut'
import ProfilePic from '../assets/img/4.png'

export const Profile = () => {
  return (
    <LayOut>
    <div className="container-fluid overflow-auto" style={{ margin: '0px', padding: '0px' }}>
    <div className="container-fluid overflow-auto" style={{ height: '93vh', margin: '0', padding: '3%', background: 'linear-gradient(180deg, #44CCCC 0%, rgba(76, 44, 206, 0.93) 100%)', minHeight: '300px' }}>
        <div
        className="shadow-lg row d-block"
        style={{ height: 'auto', minHeight: '100%', borderRadius: '20px', backgroundColor: 'white' }}
        >
            <div className='col col-rows-2'>
                <div className='row row-cols-2'>
                    <div className='col'>
                        <img src={ProfilePic} className="ProfilePic" style={{size:"50%"}}/>
                    </div>
                </div>
                <div className='row'></div>
            </div>
        </div>
    </div>
    </div>
</LayOut>
  )
}
