
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Menu from "./Pages/Menu";
import Master from "./Pages/Master";
import Service from "./Pages/Service";
import Testimonial from "./Pages/Testimonial";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Aboutus/" element={<Aboutus/>}/>
        <Route path="/Menu/" element={<Menu/>}/>
        <Route path="/Master/" element={<Master/>}/>
        <Route path="/Service/" element={<Service/>}/>
        <Route path="/Testimonial/" element={<Testimonial/>}/>
        <Route path="/contact/" element={<Contact/>}/>
        <Route path="/Login/" element={<Login/>}/>
        <Route path="/Register/" element={<Register/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
export default App;
