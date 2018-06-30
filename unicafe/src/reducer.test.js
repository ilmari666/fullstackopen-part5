import deepFreeze from 'deep-freeze';
import counterReducer from './reducer';

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0
  };

  it('should return a proper initial state when called with undefined state', () => {
    const state = {};
    const action = {
      type: 'DO_NOTHING'
    };

    const newState = counterReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  it('good and total is incremented', () => {
    const action = {
      type: 'GOOD'
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 1,
      neutral: 0,
      bad: 0,
      total: 1
    });
  });

  it('neutral is incremented', () => {
    const action = {
      type: 'NEUTRAL'
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 0,
      neutral: 1,
      bad: 0,
      total: 1
    });
  });

  it('bad and total is incremented', () => {
    const action = {
      type: 'bad'
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 0,
      neutral: 0,
      bad: 1,
      total: 1
    });
  });

  it('zero resets state', () => {
    const action = {
      type: 'zero'
    };
    const state = {
      good: 1,
      neutral: 2,
      bad: 3,
      total: 6
    };

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual(initialState);
  });
});
