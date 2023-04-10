import "./App.css";
import MainRoute from "./pages/MainRoute";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Header from "./components/LandingPage/Header/Header";
import PrivatrRoutes from "./components/PrivateRoutes";


function App() {
  return (
    <div className="App">
      <MainRoute />
      <Footer/>
   
    </div>
  );
}

export default App;
