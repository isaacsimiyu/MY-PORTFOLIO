import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Contact from "../pages/contact/Contact";
import SignUp from "../components/Signup/Signup";


export const routes=[
{
  path: "/home",
  element: <Home/>,
  isPraivate: false,
},
{
  path: "/about",
  element: <About/>,
  
  
},
{
  path: "/header",
  element: <Header/>,
  isPraivate: false,
},
{
  path: "/footer",
  element: <Footer/>,
  isPraivate: false,
},
{
path: "/contacts",
element: <Contact/>,
isPraivate: false,
},


];