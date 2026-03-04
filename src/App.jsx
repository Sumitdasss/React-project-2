
import Bannerone from '../Componants/Banner/Bannerone'
import About from '../Componants/Layout/About'
import Blog from '../Componants/Layout/Blog'
import Fotter from '../Componants/Layout/Fotter'
import Review from '../Componants/Layout/Review'
import Rootlayout from '../Componants/Layout/Rootlayout'
import Service from '../Componants/Layout/Service'
import Work from '../Componants/Layout/Work'
import Workprosses from '../Componants/Layout/Workprosses'
import Error from '../Componants/Page/Error'
import Homepage from '../Componants/Page/Homepage'
import Navbar from '../Componants/Page/Navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom'


function App() {
 

  return (
    <>
    <Routes>
<Route path='/' element={<Rootlayout/>}>
<Route index element={<Homepage/>}/>
<Route path='about' element={<About/>}/>
<Route path='service' element={<Service/>}/>
<Route path='blog' element={<Blog/>}/>
<Route path='*' element={<Error/>}/>



</Route>

      </Routes>
     
      </>
  )
}

export default App
