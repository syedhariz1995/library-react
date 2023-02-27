import Footer from "./component/Footer";
import Nav from "./component/Nav";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Books from "./pages/Books";
import {books} from './data.js'

function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<Books books={books}/>}/> 
      </Routes>
      
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
