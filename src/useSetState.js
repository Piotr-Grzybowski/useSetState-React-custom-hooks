import React from 'react';

const useSetState = (initialState = {}) => {
  const [state, regularSetState] = React.useState(initialState);

  const setState = (newState) => {
    regularSetState((prevState) => ({
      ...prevState,
      ...newState
    }));
  };

  return [state, setState];
};

export default useSetState;
