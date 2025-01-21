import {  Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Help from "./component/Help";
import Login from "./component/Login";
import Header from "./component/Header";
import Footer from "./component/Footer";
import User from "./component/User";
import Github from "./component/Github";
// import Layout from "./component/Layout";

function App() {
  return (
    <div className="App">
      
      {/* <Layout/> */}
      <Header/>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/github" element={<Github />} />
          <Route path="/user/:userid" element={<User />} />

        </Routes>
      </main>
    <Footer/>
   
    </div>
  );
}

export default App;
