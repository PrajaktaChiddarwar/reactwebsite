import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header'
import Work from "./component/Work";
import AboutUS from './AboutUS';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
function Home() {
  return (
    <div className="Home">
    <Navbar/>
    <Header/>
    <Work/>
    <AboutUS/>
    <Services/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default Home;
