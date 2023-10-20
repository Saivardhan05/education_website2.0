import Navbar from "./components/Navbar";
import Discussionforum from "./components/Discussionforum";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import CoursePage from "./components/Coursepage";
import Courselist from "./components/Courselist";

function App() {
  return (
    <div className="App">
   <Navbar></Navbar>
    <Routes>
      <Route path="/courses" element={<Courselist/>} />
      
      <Route path="/" element={<Home/>}/>
      <Route path="/discussionforum" element={<Discussionforum/>}/>
      <Route path="/course/:courseId" element={<CoursePage/>} />
      
     
      </Routes>
      {/* <Videoplaylist/> */}
        </div>
  );
}

export default App;
