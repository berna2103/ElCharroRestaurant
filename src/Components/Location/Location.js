import './location.css'
export default function Location(){
    return(
      <>
        <div id="location" className="container-fluid text-white pt-5 bg-danger">
        <div class="container">
                <div className='row d-flex text-start align-content-center'>
                   <div className='col-lg-4 col-md-5 mx-auto'>
                      <h1 className='display-6 text-white'>Get in touch</h1>
                      <p className='lead'>El Charro Restaurant</p>
                      <p className='lead text-white'><i class="bi bi-phone"></i> <a className='lead text-white' href="tel:888-666-6666">(888) 666-6666</a></p>
                      <p className='lead'><i class="bi bi-geo-alt"></i> 3534 E 106th St Chicago, IL 60617</p>
                   </div>
                   <div className="col-lg-8 col-md-7">
                     <iframe className="shadow-lg rounded-3" width="100%" height="250px" title='El Charro' id="gmap_canvas" src="https://maps.google.com/maps?q=3534%20E%20106th%20St%20Chicago%20IL%2060617&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                   </div>
                </div>
              </div>
            <div className="container text-center pt-5 pb-3">
                <p>Powered by <span> <a className='text-white' href="http://barciastech.com">Barcias Tech.</a></span></p>

                <p className='mt-2'></p>
            </div>
        </div>
        </>
    )
}