
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddStudent from './students/addStudent';
import EditStudent from './students/editStudent';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/addstudent" element={<AddStudent />}></Route>
        <Route exact path="/editstudent/:id" element={<EditStudent />}></Route>
      </Routes>

      
      </Router>
      
    </div>
  );
}

export default App;
