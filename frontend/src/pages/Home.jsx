import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import TripForm from "../components/home/TripForm";
import TripResult from "../components/trip/TripResult";
import FeatureSection from "../components/home/FeatureSection";
import Footer from "../components/layout/Footer";

function Home() {
  const [trip, setTrip] = useState(null);

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <Hero />

      <TripForm setTrip={setTrip} />

      <TripResult trip={trip} />

      <FeatureSection />

      <Footer />
    </div>
  );
}

export default Home;