import React, { useReducer } from 'react';

const initialState = { on: false };

function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { ...state, on: !state.on };
    case 'on':
      return { ...state, on: true };
    case 'off':
      return { ...state, on: false };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export default function Toggle() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8, maxWidth: 360 }}>
      <h3>Toggle useReducer</h3>
      <p>Trạng thái: <strong>{state.on ? 'Bật' : 'Tắt'}</strong></p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => dispatch({ type: 'toggle' })}>Toggle</button>
        <button onClick={() => dispatch({ type: 'on' })}>Bật</button>
        <button onClick={() => dispatch({ type: 'off' })}>Tắt</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </div>
  );
}