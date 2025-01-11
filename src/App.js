import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <div className="app-container">
        <Navbar isAuth={isAuth} />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/createpost" element={<CreatePost isAuth={isAuth} />}></Route>
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
            <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
