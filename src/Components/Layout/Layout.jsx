import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
