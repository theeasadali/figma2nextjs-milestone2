import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import FocusMission from "./components/focusMission";
import Hero from "./components/hero";
import Projects from "./components/projects";

export default function Home() {
  return (
      <main className="container">
        <Hero/>
        <AboutUs/>
        <FocusMission/>
        <Projects/>
        <ContactUs/>
      </main>
  );
}
