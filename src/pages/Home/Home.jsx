import { useDispatch, useSelector } from "react-redux";
import Filter from "../../Components/Filter/Filter";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Layout from "../../Components/Layout/Layout";
import Products from "../../Components/Products/Products";
import Track from "../../Components/Track/Track";
import Testimonial from "../../Components/testimonial/Testimonial";
import { addToCart, deleteFromCart } from "../../Redux/CartSlice";

const Home = () => {
  const dispase = useDispatch();
  const cartitem = useSelector((state) => state.cart);

  const addcart = () => {
    dispase(addToCart(1));
  };
  const delate = () => {
    dispase(deleteFromCart("shirts"));
  };

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
