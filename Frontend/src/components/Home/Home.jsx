import About from "../About/About";
import Wave from "../Animation/Wave";
import Company from "../companies/Company";
import Contact from "../Contact/Contact";
import FAQs from "../FAQ/FAQs";
import Hero from "../OtherComponents/Hero";
import MyLocation from "../OtherComponents/MyLocation";
import OurWork from "../OtherComponents/OurWork";
import Plan from "../Plans/Plan";
import Services from "../OtherComponents/Services";
import Testimonial from "../OtherComponents/Testimonial";

function Home() {
  return (
    <div>

      <Hero />

      <Plan />

      <About />

      <Services />

      <Company />

      <OurWork />

      <Wave />

      <Testimonial />

      <FAQs />

      <Contact />

      <MyLocation />

    </div>
  );
}

export default Home;
