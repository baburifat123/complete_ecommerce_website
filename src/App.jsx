import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyState from "./context/Data/myState";
import Dashboard from "./pages/Admin/Dashbord/Dashboard";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Nopage from "./pages/Nopage/Nopage";
import Oder from "./pages/Oder/Oder";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Oder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
