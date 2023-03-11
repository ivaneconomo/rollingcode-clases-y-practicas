import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid bg-dark text-light'>
      <div className='row' style={{height: '100px', paddingTop: '2rem', marginTop: '0px'}}>
        <div className='col-xs-12 col-lg-6 d-flex justify-content-center'>
          <h1>RollingCode</h1>
        </div>
        <div className='col-xs-12 col-lg-6 d-flex justify-content-center'>
          <h2>Software Store</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer