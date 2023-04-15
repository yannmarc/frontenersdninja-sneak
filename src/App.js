import { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import Shopping from "./components/Shopping";


function App() {
  return (
    <Fragment>
      <div className="App">
        <Navbar />
        <Shopping />
      </div>
    </Fragment>
  );
}

export default App;
