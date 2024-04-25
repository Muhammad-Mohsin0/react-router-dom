import { BrowserRouter,Routes ,Route} from "react-router-dom";
import TravelPage from "../src/Pages/travelpage"
import QuizPage from "../src/Pages/quizpage"
import OnlinePage from "../src/Pages/onlinepage"
import Navbar from "./Components/Navbaronline";


function App() {
  return (
    <>
     <header>
     
     </header>
    <BrowserRouter>
    <Navbar/>
      <Routes>
       <Route path="/" element={<TravelPage/>}/>
       <Route path="/QuizPage" element={<QuizPage/>}/>
       <Route path="/OnlinePage" element={<OnlinePage/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
    
  
  );
}

export default App;
