import { useReducer } from "react";
const initializeState = () => {
  return ["initailState"];
};
let initialState = [];
const myReducer = (prevState, action) => {
  let array;
  switch (action.type) {
    case "ADD":
      console.log(prevState);
      array = [...prevState];
      array.push(action.payload);
      return array;
    case "REMOVE":
      array = [...prevState];
      array.pop();
      return array;
    case "CLEAR":
      array = [];
      return array;
    default:
      return [...prevState];
  }
};

const App = () => {
  const [state, dispatcher] = useReducer(
    myReducer,
    initialState,
    initializeState
  );
  const handleAdd = () => {
    dispatcher({ type: "ADD", payload: Math.round(Math.random() * 100 + 100) });
  };
  const handleRemove = () => {
    dispatcher({ type: "REMOVE" });
  };

  const handleClear = () => {
    dispatcher({ type: "CLEAR" });
  };
  return (
    <>
      <div>{state.join("-")}</div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleClear}>Clear</button>
    </>
  );
};

export default App;
