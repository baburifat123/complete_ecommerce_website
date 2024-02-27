import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import MyState from "./context/Data/MyState";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Admin/Dashbord/Dashboard";
import AddProduct from "./pages/Admin/Page/AddProduct";
import UpdateProduct from "./pages/Admin/Page/UpdateProduct";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Nopage from "./pages/Nopage/Nopage";
import Oder from "./pages/Oder/Oder";
import Allproducts from "./pages/allproducts/Allproducts";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Login from "./pages/registions/Login";
import Signup from "./pages/registions/Signup";
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <ProtectedRouted>
                <Oder />
              </ProtectedRouted>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutedAdmin>
                <Dashboard />
              </ProtectedRoutedAdmin>
            }
          />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRoutedAdmin>
                <AddProduct></AddProduct>
              </ProtectedRoutedAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRoutedAdmin>
                <UpdateProduct></UpdateProduct>
              </ProtectedRoutedAdmin>
            }
          />
          <Route path="/*" element={<Nopage />} />
        </Routes>
        <ToastContainer></ToastContainer>
      </Router>
    </MyState>
  );
}

export default App;
// user

const ProtectedRouted = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

const ProtectedRoutedAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user.email === "jadu@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
