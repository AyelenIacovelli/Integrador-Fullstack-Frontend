import Layout from "./components/Layout/Layout";
// import Modal from 'react-modal';
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Routers from "./routers/Routers"
import Footer from "./components/Footer/Footer"

// Modal.setAppElement('#root');
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
