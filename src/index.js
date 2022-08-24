import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

const App = () => {
  const good = () => {
    store.dispatch({
      type: "GOOD",
    });
  };

  const ok = () => {
    store.dispatch({
      type: "GOOD",
    });
  };
  const bad = () => {
    store.dispatch({
      type: "GOOD",
    });
  };
  const reset = () => {
    store.dispatch({
      type: "GOOD",
    });
  };

  const data = store.getState;

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset stats</button>
      <div>good {data.good}</div>
      <div>ok {data.ok}</div>
      <div>bad {data.bad}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
