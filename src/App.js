import { render } from "react-dom";
import { Calculator } from "./components/Calculator";
import "./styles/base.scss";

function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

render(<App />, document.getElementById("app"));
