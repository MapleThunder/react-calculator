export const initialState = {
  leftNum: "0",
  operator: undefined,
  rightNum: undefined,
};

export const ACTIONS = {
  CLEAR: "CLEAR",
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  MULTIPLY: "MULTIPLY",
  DIVIDE: "DIVIDE",
  EQUALS: "EQUALS",
  NUMBER: "NUMBER",
};

export const SIGNS = {
  ADD: "+",
  SUBTRACT: "-",
  MULTIPLY: "*",
  DIVIDE: "/",
};

export function calculatorReducer(state, event) {
  console.log(event);
  switch (event.type) {
    case ACTIONS.CLEAR:
      return initialState;

    case ACTIONS.ADD:
      break;
    case ACTIONS.SUBTRACT:
      break;
    case ACTIONS.MULTIPLY:
      break;
    case ACTIONS.DIVIDE:
      break;

    case ACTIONS.EQUALS:
      if (state.leftNum && state.rightNum) {
        return calculate(state);
      } else {
        return state;
      }

    case ACTIONS.NUMBER:
      return formatNumber(state, event.data);

    default:
      return state;
  }
}

function calculate(state) {
  switch (state.operator) {
    case SIGNS.ADD:
      return state.leftNum + state.rightNum;
    case SIGNS.SUBTRACT:
      return state.leftNum - state.rightNum;
    case SIGNS.DIVIDE:
      return state.leftNum * state.rightNum;
    case SIGNS.MULTIPLY:
      return state.leftNum / state.rightNum;
  }
}

function formatNumber(state, data) {
  if (state.operator == undefined) {
    if (state.leftNum == "0") {
      return { ...state, leftNum: data };
    } else if (data != ".") {
      return { ...state, leftNum: state.leftNum + data };
    } else if (data == "." && !state.leftNum.includes(".")) {
      return { ...state, leftNum: state.leftNum + data };
    }
    return state;
  }
}
