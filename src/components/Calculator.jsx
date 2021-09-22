import { useState } from "react";
import styled from "@emotion/styled";

const CalculatorBody = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  grid-gap: 10px;
  background-color: var(--bodyBackground);
  width: 400px;
  height: 600px;
  padding: 15px;
  border-radius: var(--borderRadius);

  .screen {
    background-color: var(--screenBackground);
    border-radius: 5px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    text-align: right;
    font-size: 1.8em;
    padding: 0 5px;
    color: var(--screenTextColour);
    
    .expression {
      border-radius: 5px 5px 0 0;
      display: flex;
      align-items: center;
      justify-content: right;
    }
    .answer {
      border-radius: 0 0 5px 5px;
      display: flex;
      align-items: center;
      justify-content: right;
    }
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 8px;

    button {
      background-color: var(--buttonBackground);
      border-radius: 50%;
      font-size: 1.75rem;

    }
    button.operator {
      background-color: var(--operator);
    }
    .zero {
      grid-column: 1/3;
      border-radius: 25% / 50%;
      text-align: left;
      padding-left: 39px;
    }

    button:hover {
      background-color: var(--buttonHover);
    }
  }
`;

export function Calculator() {
  const [expression, setExpression] = useState("0");

  function addToExpression(value) {
    if(value == "." && expression.includes(".")) {
      return;
    }
    
    if(expression == "0") {
      setExpression(value);
    }
    else setExpression(expression + value);
  }

  return <CalculatorBody>
    <div className="screen">
      <div className="expression">{expression}</div>
      <div className="answer"></div>
    </div>
    <div className="buttons">
      <button onClick={() => setExpression("0")}>AC</button>
      <button>+/-</button>
      <button>%</button>
      <button onClick={() => addToExpression("/")} className="operator">÷</button>
      
      <button onClick={() => addToExpression("7")}>7</button>
      <button onClick={() => addToExpression("8")}>8</button>
      <button onClick={() => addToExpression("9")}>9</button>
      <button onClick={() => addToExpression("*")} className="operator">x</button>
      
      <button onClick={() => addToExpression("4")}>4</button>
      <button onClick={() => addToExpression("5")}>5</button>
      <button onClick={() => addToExpression("6")}>6</button>
      <button onClick={() => addToExpression("-")} className="operator">-</button>

      <button onClick={() => addToExpression("1")}>1</button>
      <button onClick={() => addToExpression("2")}>2</button>
      <button onClick={() => addToExpression("3")}>3</button>
      <button onClick={() => addToExpression("+")} className="operator">+</button>
      
      <button onClick={() => addToExpression("0")} className="zero">0</button>
      <button onClick={() => addToExpression(".")}>.</button>
      <button className="operator">=</button>
    </div>
  </CalculatorBody>;
}