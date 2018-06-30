const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type.toUpperCase()) {
    case 'GOOD':
      return {
        ...state,
        good: state.good + 1,
        total: state.total + 1
      };
    case 'NEUTRAL':
      return {
        ...state,
        neutral: state.neutral + 1,
        total: state.total + 1
      };
    case 'BAD':
      return {
        ...state,
        bad: state.bad + 1,
        total: state.total + 1
      };
    case 'ZERO':
      return {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0
      };
    default:
      return state;
  }
};

export default counterReducer;
