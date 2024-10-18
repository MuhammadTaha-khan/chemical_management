import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Healthcare from "./components/Healthcare";
import Services from "./components/Services";
import Aboutsection from "./components/Aboutsection";
import  Calendar  from './components/Calendar';
// import { CTABanner } from './components/CTABanner';
import ConsultationForm from './components/ConsultationForm';
import Resours from './components/Resours';
// import {Faq} from './components/Faq';


export default function HomePage() {
  return (
   <div>
    <Navbar/>
    <Slider/>
    <Healthcare/>
    <Services/>
    <Aboutsection/>
    <ConsultationForm/>
    {/* <Consultation/> */}
    <Calendar/>
    <Resours/>
    {/* <Faq  /> */}
    {/* <Consultation/> */}
    {/* <CTABanner/> */}
   </div>
  );
}
