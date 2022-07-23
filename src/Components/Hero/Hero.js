import './hero.css'

export default function Hero() {
  return (
    <div id='hero' className='container-fluid'>
        <div className='container'>
            <div className='row hero text-white'>
               <div className='col-lg-10 col-md-12 my-auto mx-auto'>
                 <h1 className='display-1 text-white'>Authentic Mexican Dishes Every Day!</h1>
                 <a href='/menu' className='btn btn-lg btn-danger'>Our Menu</a>
               </div>
            </div>
        </div>
    </div>
  )
}
