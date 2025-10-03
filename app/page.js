import HeroSection from "@/components/HeroSection/HeroSection";
import LiveMatches from "@/components/LiveMatches/LiveMatches";
import MatchCard from "@/components/MatchCard/MatchCard";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    {/* <MatchCard/> */}
    <LiveMatches/>
    </>
  )
}
