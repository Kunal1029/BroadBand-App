// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../counter/counterSlice.js";

export default function Counter() {
  const state = useSelector((state) => state.value);
  console.log(state); // Check if `state.counter` exists and has a `value` property

  //   const count = useSelector((state) => state.counter.value); // Ensure `state.counter.value` matches your state structure
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>Count: {state}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
