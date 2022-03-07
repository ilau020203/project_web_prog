import logo from './logo.svg';

import './App.css';
import Header from "./components/Header";
import Friends from "./components/Friends";
import Navbar from "./components/Navbar";
import Messenger from "./components/Messenger";
import News from "./components/News";

import { BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>  
        <Header>
        </Header>
        <Navbar>
        </Navbar>
        <main>
          <Routes>
            <Route exact path="/" component={()=>{return(<Navigate  to="/allDeal" />)}} />
            <Route path="/friends/" element={
            <Friends>
                </Friends>
            }></Route>
            <Route path="/messenger/" element={
              <Messenger>
                </Messenger>
            }></Route>


            
            <Route path="/news" element={
                
                <News>
                </News>
              
            }></Route>
          </Routes>
        </main>
        
      </Router>
    </div>
  );
}

export default App;
