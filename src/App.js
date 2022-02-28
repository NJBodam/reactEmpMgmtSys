import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
        <div>
          <HeaderComponent />
            <div className="container">
              <Routes>

                <Route path="/" element= {<ListEmployeeComponent/>} />  
                <Route path="/employees" element= {<ListEmployeeComponent/>} />

              </Routes>
              
            </div>
          <FooterComponent /> 
       </div>
    </Router>

    
  );
}

export default App;
