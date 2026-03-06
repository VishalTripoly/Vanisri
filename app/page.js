
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Chooseus from "@/components/sections/home1/Chooseus"
import Contact from "@/components/sections/home1/Contact"
import Contactlenses from "@/components/sections/home1/Contactlenses"
import Feature from "@/components/sections/home1/Feature"
import Funfact from "@/components/sections/home1/Funfact"
import Map from "@/components/sections/home1/Map"
import Spectacles from "@/components/sections/home1/Spectacles"
import Sunglasses from "@/components/sections/home1/Sunglasses"
import Testimonial from "@/components/sections/home1/Testimonial"
import Shopdetails from "@/components/sections/home1/Shopdetails"




export default function Home() {

    return (
      <div className="boxed_wrapper">
        <Layout headerStyle={1} footerStyle={1}>
          <Banner />
          <About />
          <Feature />
          <Sunglasses />
          <Spectacles />
          <Contactlenses />
          <Shopdetails />
          <Funfact />
          <Chooseus />
          <Testimonial />
          <Contact />
          <Map />
        </Layout>
      </div>
    );
}