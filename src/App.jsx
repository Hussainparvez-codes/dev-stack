import { useEffect, useState } from "react";
  import Navbar from "./components/Navbar";
  import Hero from "./components/Hero";
  import Technologies from "./components/Technologies";
  import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Technologies />
      <Footer />

    </>
  );
}

export default App;