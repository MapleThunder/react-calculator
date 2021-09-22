import { render } from "react-dom";
import { Calculator } from "./components/Calculator";
import "./styles/base.scss";

function App() {
  return (
    <>
      <Calculator />
    </>
  );
}

render(<App />, document.getElementById("app"));
