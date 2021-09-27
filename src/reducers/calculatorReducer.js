export const initialState = {
  leftNum: "0",
  operator: undefined,
  rightNum: undefined,
  clean: true,
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
  switch (event.type) {
    case ACTIONS.CLEAR:
      return initialState;

    case ACTIONS.ADD:
      return { ...state, operator: SIGNS.ADD };
    case ACTIONS.SUBTRACT:
      return { ...state, operator: SIGNS.SUBTRACT };
    case ACTIONS.MULTIPLY:
      return { ...state, operator: SIGNS.MULTIPLY };
    case ACTIONS.DIVIDE:
      return { ...state, operator: SIGNS.DIVIDE };

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
  let newNum = undefined;
  const leftNum = parseFloat(state.leftNum);
  const rightNum = parseFloat(state.rightNum);

  switch (state.operator) {
    case SIGNS.ADD:
      newNum = leftNum + rightNum;
      break;
    case SIGNS.SUBTRACT:
      newNum = leftNum - rightNum;
      break;
    case SIGNS.MULTIPLY:
      newNum = leftNum * rightNum;
      break;
    case SIGNS.DIVIDE:
      newNum = leftNum / rightNum;
      break;
  }

  return {
    leftNum: newNum,
    operator: undefined,
    rightNum: undefined,
    clean: true,
  };
}

function formatNumber(state, data) {
  if (state.operator == undefined) {
    if (state.clean) {
      return { ...state, leftNum: data, clean: false };
    } else if (data != ".") {
      return { ...state, leftNum: state.leftNum + data };
    } else if (data == "." && !state.leftNum.includes(".")) {
      return { ...state, leftNum: state.leftNum + data };
    }
    return state;
  } else {
    if (state.rightNum == "0" || state.rightNum == undefined) {
      return { ...state, rightNum: data };
    } else if (data != ".") {
      return { ...state, rightNum: state.rightNum + data };
    } else if (data == "." && !state.rightNum.includes(".")) {
      return { ...state, rightNum: state.rightNum + data };
    }
  }
}
