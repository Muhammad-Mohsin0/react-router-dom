import { BrowserRouter,Routes ,Route} from "react-router-dom";
import TravelApp from "../src/Pages/travelpage"
import QuizApp from "../src/Pages/quizpage"


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<TravelApp/>}/>
       <Route path="/QuizApp" element={<QuizApp/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
