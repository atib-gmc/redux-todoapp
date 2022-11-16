import React, { useState } from "react";
import { addTodo } from "../../../app/features/todoSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!input) return;
    dispatch(addTodo(input));
    setInput("");
  }
  return (
    <form onSubmit={(e) => submit(e)} className="flex flex-col gap-3 ">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="add todo..."
        name="todo"
        type="text"
        className="h-8 p-2 border-2"
      />
      <button className={`btn ${!input && "btn-disabled"}`}>submit</button>
    </form>
  );
};

export default AddTodo;
