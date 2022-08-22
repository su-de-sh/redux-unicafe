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

  return (
    <div>
      <button onClick={good}>good</button>
      <button>ok</button>
      <button>bad</button>
      <button>reset stats</button>
      <div>good {data.good}</div>
      <div>ok</div>
      <div>bad</div>
    </div>
  );
};

export default App;
