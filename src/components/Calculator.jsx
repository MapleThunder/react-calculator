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
      font-size: larger;

    }
    button.operator {
      background-color: var(--operator);
    }
    .zero {
      grid-column: 1/3;
      border-radius: 25% / 50%;
    }

    button:hover {
      background-color: var(--buttonHover);
    }
  }
`;

export function Calculator() {
  return <CalculatorBody>
    <div className="screen">
      <div className="expression">0</div>
      <div className="answer"></div>
    </div>
    <div className="buttons">
      <button>AC</button>
      <button>+/-</button>
      <button>%</button>
      <button className="operator">÷</button>
      
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="operator">x</button>
      
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="operator">-</button>

      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className="operator">+</button>
      
      <button className="zero">0</button>
      <button>.</button>
      <button className="operator">=</button>
    </div>
  </CalculatorBody>;
}