import { Fragment } from "react";
import Footer from "./components/Footer";
import Shopping from "./components/Shopping";


function App() {
  return (
    <Fragment>
        <div className="App">
          <Shopping />
          <Footer />
        </div>
    </Fragment>
  );
}

export default App;
