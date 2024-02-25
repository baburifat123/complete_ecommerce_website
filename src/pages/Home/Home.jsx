import Layout from "../../Components/Layout/Layout";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Filter from "../../Components/Filter/Filter";
import Products from "../../Components/Products/Products";
import Track from "../../Components/Track/Track";
import Testimonial from "../../Components/testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection></HeroSection>
        <Filter></Filter>
        <Products></Products>
        <Track></Track>
        <Testimonial></Testimonial>
      </Layout>
    </div>
  );
};

export default Home;
