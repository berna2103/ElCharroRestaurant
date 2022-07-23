import './ourstory.css'
export default function OurStory() {
  return (
    <div id="our-story" className="container-fluid">
       <div className='container h-100'>
        <img className='mt-5' height={75} width={200} src='https://cdn.pixabay.com/photo/2012/04/01/18/29/cayenne-23902_1280.png' alt='pepper'/>
         <div className='row text-danger pt-5 pb-5'>
            <div className='col-lg-11 my-auto'>
                <h1 className='display-4 mb-5'>From our grilled fajitas to our famous margaritas, everything we serve is Made-From-Scratch to create unforgettable memories.</h1>
                <div className='container'>    
                    <a href='/menu' className='btn btn-danger btn-lg lead text-uppercase'>Dine In Menu</a>
                </div>
            </div>
         </div>
       </div>
    </div>
  )
}
