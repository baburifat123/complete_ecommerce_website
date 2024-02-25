import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyState from "./context/Data/MyState";

import Dashboard from "./pages/Admin/Dashbord/Dashboard";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Nopage from "./pages/Nopage/Nopage";
import Oder from "./pages/Oder/Oder";
import Allproducts from "./pages/allproducts/Allproducts";
import Login from "./pages/registions/Login";
import Signup from "./pages/registions/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Oder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
