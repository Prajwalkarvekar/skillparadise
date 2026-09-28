import Navbar from "../../components/common/Nabvar";
import Hero from "../../components/common/Home/Hero";
import WhyChooseUs from "../../components/common/Home/WhyChooseUs";
import PlacementAssistance from "../../components/PlacementAssistance/PlacementAssistance";
import StatsBar from "../../components/StatsBar/StatsBar";
import FeaturedCourses from "../../components/FeaturedCourses/FeaturedCourses";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ.jsx";
import Gallery from "../../components/Gallery/Gallery.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Solutions from '../../components/Solutions/Solutions.jsx';

function Home({ onOpenBrochure }) {
  return (
    <>
      <Navbar />
      <Hero onOpenBrochure={onOpenBrochure} />
      <WhyChooseUs />
      <PlacementAssistance />
      <StatsBar />
      <FeaturedCourses />
      <Testimonials />
       <Solutions/>
      <Gallery />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
