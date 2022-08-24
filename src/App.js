import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state;
  });
  const good = () => {
    dispatch({
      type: "GOOD",
    });
  };
  const ok = () => {
    dispatch({
      type: "GOOD",
    });
  };
  const bad = () => {
    dispatch({
      type: "GOOD",
    });
  };
  const reset = () => {
    dispatch({
      type: "GOOD",
    });
  };

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

export default App;
