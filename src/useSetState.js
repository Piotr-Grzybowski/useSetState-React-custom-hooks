import React from 'react';

const useSetState = (initialState = {}) => {
  const [state, regularSetState] = React.useState(initialState);

  const setState = (newState, cb) => {
    if (typeof newState === 'function') {
      newState = newState(state);
    }
    regularSetState((prevState) => ({
      ...prevState,
      ...newState
    }));
    if (cb) cb();
  };

  return [state, setState];
};

export default useSetState;
