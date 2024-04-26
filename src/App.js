import { BrowserRouter,Routes ,Route} from "react-router-dom";
import TravelPage from "../src/Pages/travelpage"
import QuizPage from "../src/Pages/quizpage"
import OnlinePage from "../src/Pages/onlinepage"
import Navbar from "./Components/Navbaronline";
import LogInPage from "./Pages/Loginpage";
import ProtectedRoutes from "./Components/Protected";

function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar/>
      <Routes>
        <Route path="/" element={<ProtectedRoutes Component= {TravelPage}/>}/>
        <Route path="/QuizPage" element={<ProtectedRoutes Component= {QuizPage}/>}/>
        <Route path="/OnlinePage" element={<ProtectedRoutes Component= {OnlinePage}/>}/>
        <Route path="/LoginPage" element={<LogInPage/>}/>
         
        
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
