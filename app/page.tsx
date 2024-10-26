"use client"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Healthcare from "./components/Healthcare";
import Aboutsection from "./components/Aboutsection";
import Calendar from './components/Calendar';
import ConsultationForm from './components/ConsultationForm';
import Resours from './components/Resours';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Services from './components/Services';
import Timing from './components/Timing';
// import SliderSection from './components/Services';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      {/* <Timing/> */}
      <Slider />
      <Healthcare />
      {/* <SliderSection setActiveSection={(section: string) => ""} /> */}
      <Services/>
      <Faq />
      <Aboutsection />
      <ConsultationForm />
      <Calendar />
      <Resours />
      <Footer />
    </div>
  );
}
