import Layout from "./components/Layout/Layout";
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Routers from "./routers/Routers"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <Layout>
      <Navbar />
      <Routers />
      <Footer />
    </Layout>
  );
}

export default App;
