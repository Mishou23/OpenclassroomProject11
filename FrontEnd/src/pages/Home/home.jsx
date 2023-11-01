import React from "react";
import Navbar from "../../container/Header/nav";
import Hero from "../../components/Hero/hero";
import Features from "../../components/Features/features";
import Footer from "../../components/Footer/footer";

function Home() {
  return (
  <>
    <Navbar />
     <main>
     <Hero />
      <Features />
     </main>
      <Footer />
  </>
  
  );
}

export default Home;
