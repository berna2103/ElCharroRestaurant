import './our-menu.css'
import useContentful from '../Hooks/useContentful'
import Promotion from './Components/Promotion'

export default function Promotions() {

  const [promotions, isLoading] = useContentful('promotions')

  return (
    <div id='promotions'> 
    <div className='container'>
      <h1 className='display-4 mt-5'>Specials</h1>
    </div>
       { (isLoading) ? <p>isLoading</p> : <>
           {promotions.map((item, index) => {
             return <Promotion id={item.sys.id} promotion = {item} index = {index}/>
           })} 
        </> } 
    </div>
  )
}
