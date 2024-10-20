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
// import Test from './components/Test';
import Faq from './components/Faq';
// import Contact from './components/Contact';
// import Faq2 from './components/Faq2';


export default function HomePage() {
  return (
   <div>
    <Navbar/>
    {/* <Contact/> */}
    <Slider/>
    <Healthcare/>
    <Services/>
    <Aboutsection/>
    <ConsultationForm/>
    {/* <Consultation/> */}
    <Calendar/>
    <Resours/>
    <Faq  />
    {/* <Faq2/> */}
    {/* <Faqtest/> */}
    {/* <Consultation/> */}
    {/* <CTABanner/> */}
    {/* <Test/> */}
   </div>
  );
}
