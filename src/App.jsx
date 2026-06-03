import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import About from "./components/About";
import BlurBackground from "./components/BlurBackground";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";


export default function App() {
  const { scrollYProgress } = useScroll();

const scaleX = useSpring(scrollYProgress);

const background = useTransform(
  scrollYProgress,
  [0, 1],
  ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
);

  return (
    <>
     <div>
      <motion.div
        className="z-50"
        style={{
          scaleX,
          transformOrigin: "left",
          background,
          position: "sticky",
          top: 0,
          width: "100%",
          height: "2px",
        }}
      />
    <BlurBackground/>
    <main className="antialiased max-w-7xl mx-auto relative z-10">
    <Navbar/>
    <Hero/>
    <Projects/>
    <About/>
    <Experience/>
    <Testimonials/>
    <Contact/>
    </main>
    
    </div>
    </>
  )
}
