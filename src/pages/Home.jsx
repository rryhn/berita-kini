import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Recommendation from "../components/Recommendation";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Popular />
      <Recommendation />
      <Footer />
    </>
  );
}
