
import Featured from "./component/Featured";
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
    </div>
  );
}

export default App;
