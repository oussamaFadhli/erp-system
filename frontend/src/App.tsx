import {Routes,Route} from "react-router-dom"
import { Home,Inventory } from './pages'
const App = () => {
  return (
    <>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/inventory" element = {<Inventory/>}/>
      </Routes>
    </>
  )
}

export default App