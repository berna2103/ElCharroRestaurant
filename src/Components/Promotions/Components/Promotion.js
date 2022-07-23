import React from 'react'

export default function Promotion(props) {

  const {title, subtitle, description, imageUrl} = props.promotion.fields
  
  return (
  <>
   {(props.index % 2 === 0) ? 
    <div key={props.key} className='container mt-5 mb-5'>
      <div className='row bg-light shadow-lg mb-3'>
      <div className='col-lg-5 col-md-6 p-0 m-0'>
          <img className='img-fluid' src={imageUrl}
          alt='tacos'/> 
      </div>
      <div className='col-lg-7 col-md-6 p-5 my-auto'>
        <h1 className='display-5 text-danger'>{title}</h1>
        <p className='lead text-muted text-uppercase'>{subtitle}</p>
        <p className='lead mt-5'>{description}</p>
      </div>
      </div>
  </div> : 
  <div key={props.key}  className='container mt-5 mb-5'>
     <div className='row bg-light shadow-lg mb-3'>
           <div className='col-lg-7 col-md-6 p-5 my-auto order-lg-first order-md-first order-sm-last order-1'>
              <h1 className='display-5 text-danger'>{title}</h1>
              <p className='lead text-muted text-uppercase'>{subtitle}</p>
              <p className='lead mt-5'>{description}</p>
            </div>
            <div className='col-lg-5 col-md-6 p-0 m-0 order-lg-last order-md-last order-sm-first order-2'>
                <img className='img-fluid' src={imageUrl}
                alt='tacos'/> 
             </div>
       </div>
  </div>}
  </>
  )
}
