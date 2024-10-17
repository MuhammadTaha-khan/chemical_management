import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Healthcare from "./components/Healthcare";
import Services from "./components/Services";
import Aboutsection from "./components/Aboutsection";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Slider/>
    <Healthcare/>
    <Services/>
    <Aboutsection/>
   </div>
  );
}
