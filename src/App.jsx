import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faJava } from "@fortawesome/free-brands-svg-icons";
import Musicanimation from './components/Musicanimation';
function App() {

  return (
   <>
        <h1 className='font-bold text-2xl text-slate-100 uppercase'>hello dear react-developer</h1>
        <FontAwesomeIcon size='2xl' icon={faReact} style={{ margin: "0 10px", color: "#fff" }} />
        <FontAwesomeIcon size='2xl' icon={faHtml5} style={{ margin: "0 10px", color: "#fff" }} />
        <FontAwesomeIcon size='2xl' icon={faJava} style={{ margin: "0 10px", color: "#fff" }} />
        <Musicanimation/>
   </>
  )
}

export default App
