import React from 'react';
import useSetState from './useSetState';
import './App.css';

function App() {
  const [state, setState] = useSetState({
    name: '',
    email: '',
    phone: ''
  });

  return (
    <form>
      <label>Name</label>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          setState({ name: e.target.value }, () => {
            console.log('changing name');
          })
        }
      />
      <label>Email</label>
      <input
        type="text"
        value={state.email}
        onChange={(e) =>
          setState((state) => {
            return { email: e.target.value };
          })
        }
      />
      <label>Phone</label>
      <input
        type="text"
        value={state.phone}
        onChange={(e) => setState({ phone: e.target.value })}
      />
    </form>
  );
}

export default App;
