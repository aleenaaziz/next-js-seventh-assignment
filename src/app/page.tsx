import Hero from "@/components/hero";
import Statics from "@/components/statics";
import Information from "@/components/information";
import Symptoms from "@/components/symptoms";
import Footer from "@/components/footer";

export default function Home() {
  return (
   <div>
    <Hero/>
    <Statics/>
    <Information/>
    <Symptoms/>
    <Footer/>
   </div>
  );
}
