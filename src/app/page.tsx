"use client";

import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import RotatingBackgroundLogos from "@/components/RotatingBackgroundLogos";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyBeingStrong from "@/components/WhyBeingStrong";
import Facilities from "@/components/Facilities";
import Trainers from "@/components/Trainers";
import Management from "@/components/Management";
import Owners from "@/components/Owners";
import Membership from "@/components/Membership";
import PersonalTraining from "@/components/PersonalTraining";
import Reviews from "@/components/Reviews";
import Motivational from "@/components/Motivational";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <RotatingBackgroundLogos />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyBeingStrong />
        <Facilities />
        <Trainers />
        <Management />
        <Owners />
        <Membership />
        <PersonalTraining />
        <Reviews />
        <Motivational />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
