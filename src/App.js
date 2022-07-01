import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import LandingPage from "./component/LandingPage/LandingPage";
import NavBar from "./component/NavBar/NavBar";

function App() {
  return (
    <main className="App">
      <NavBar />
      <ParallaxProvider>
        <LandingPage mainImg={require("./Images/astr.png")} />
      </ParallaxProvider>
    </main>
  );
}

export default App;
