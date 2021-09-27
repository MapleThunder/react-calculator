import { useReducer } from "react";
import styled from "@emotion/styled";
import { calculatorReducer, initialState, ACTIONS } from "../reducers/calculatorReducer";

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
    display: flex;
    align-items: center;
    justify-content: right;
    font-size: 2.5rem;
    padding: 0 10px;
    color: var(--screenTextColour);

    .answer {}
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
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const {CLEAR, ADD, SUBTRACT, MULTIPLY, DIVIDE, NUMBER, EQUALS} = ACTIONS;

  return <CalculatorBody>
    <div className="screen">
      <div className="answer">
        {state.rightNum ? state.rightNum : state.leftNum}
      </div>
    </div>
    <div className="buttons">
      <button onClick={() => dispatch({type: CLEAR})}>AC</button>
      <button>+/-</button>
      <button>%</button>
      <button onClick={() => dispatch({type: DIVIDE})} className="operator">÷</button>
      
      <button onClick={() => dispatch({type: NUMBER, data: "7"})}>7</button>
      <button onClick={() => dispatch({type: NUMBER, data: "8"})}>8</button>
      <button onClick={() => dispatch({type: NUMBER, data: "9"})}>9</button>
      <button onClick={() => dispatch({type: MULTIPLY})} className="operator">x</button>
      
      <button onClick={() => dispatch({type: NUMBER, data: "4"})}>4</button>
      <button onClick={() => dispatch({type: NUMBER, data: "5"})}>5</button>
      <button onClick={() => dispatch({type: NUMBER, data: "6"})}>6</button>
      <button onClick={() => dispatch({type: SUBTRACT})} className="operator">-</button>

      <button onClick={() => dispatch({type: NUMBER, data: "1"})}>1</button>
      <button onClick={() => dispatch({type: NUMBER, data: "2"})}>2</button>
      <button onClick={() => dispatch({type: NUMBER, data: "3"})}>3</button>
      <button onClick={() => dispatch({type: ADD})} className="operator">+</button>
      
      <button onClick={() => dispatch({type: NUMBER, data: "0"})} className="zero">0</button>
      <button onClick={() => dispatch({type: NUMBER, data: "."})}>.</button>
      <button onClick={() => dispatch({type: EQUALS})} className="operator">=</button>
    </div>
  </CalculatorBody>;
}