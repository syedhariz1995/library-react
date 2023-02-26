
import Discounted from "./component/Discounted";
import Explore from "./component/Explore";
import Featured from "./component/Featured";
import Footer from "./component/Footer";
import Highlights from "./component/Highlights";
import Landing from "./component/Landing";
import Nav from "./component/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <Highlights/>
      <Featured/>
      <Discounted/>
      <Explore/>
      <Footer/>
    </div>
  );
}

export default App;
