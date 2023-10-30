import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import Features from "../../components/Features/features";
import Footer from "../../components/Footer/footer";

function Home() {
  return (
  <>
    <Header />
     <main>
     <Hero />
      <Features />
     </main>
      <Footer />
  </>
  
  );
}

export default Home;
