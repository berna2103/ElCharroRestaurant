import './menu.css'
import useContentful from '../Hooks/useContentful'
import Location from '../Location/Location'

export default function Menu() {
  const [menus, menuIsLoading] = useContentful('menu')
//   const [menuSections, MenuSectionIsLoading] = useContentful('menuSection')

  return (
    <>
    <div id='our-menu' className='container-fluid bg-light'>
        <div className='container-fluid pt-5'>
          { (menuIsLoading) ? <p>isLoading</p> : 
            <>
              <div className='container'>
                 <div className='row p-2' >
                  {menus.map((item, index) => {
                    return <div id={index} className='col-lg-12 mb-3'>
                             <div className='p-3 border'>
                              <h1 className='display-3'>{item.fields.name}</h1> 
                                {item.fields.sections.map(section => {
                                return <div className='container-fluid '>
                                        <div className='row bg-light mb-3'>
                                         <div className='col-lg-4 col-md-6 p-0 m-0'
                                         style={{  
                                            backgroundImage: `url(${section.fields.image.fields.file.url})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat'
                                          }}>
                                         {/* <img className='img-section' src={section.fields.image.fields.file.url} alt={section.fields.image.fields.title}/> */} 
                                </div>
                                <div id={section.sys.id} key={section.sys.id} className='col-lg-8 col-md-6 p-3 '>
                                  <p className='display-6 fw-bold text-danger'>{section.fields.name}</p>
                                  <p className='lead text-muted'>{section.fields.description}</p>
                                  <hr></hr>
                                  <div className='container-fluid'>
                                  <div className='row text-start'>
                                  {section.fields.items.map(obj => {
                                    return <div className='col-lg-6 col-md-12 col-sm-12'> 
                                            <p className='lead text-danger fw-bold'>{obj.fields.name}{(obj.fields.premium === true) ? <span className='text-danger'> <i class="bi bi-star-fill"></i></span> : ''}</p>
                                            <p>{obj.fields.description}</p>
                                            <p className='fw-bold'>${obj.fields.price}</p>
                                         </div>
                                  })}
                                    </div>
                                   </div> 
                                  </div> 
                                </div>
                            </div> })}
                            <p className='mt-5'><span><i class="bi bi-star-fill text-danger"></i></span> Specialty of the house.</p>
                             </div>
                         </div> })}  
                    </div>   
                 </div>   
            </> } 
        </div> 
    </div>
    <Location />
    </>
  )
}
