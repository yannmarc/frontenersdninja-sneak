import { Fragment } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import Shopping from "./components/Shopping";


function App() {
  return (
    <Fragment>
      <div className="App">
        <Navbar />
        <Shopping />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
