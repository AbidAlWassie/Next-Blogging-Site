import React from "react";
import { useState } from "react";
import Todos from "../data/todos.json"

const TodoList = () => {
  return (
    <div className="mx-4 px-4">
      <h1 className="text-3xl font-bold my-6">All Todos</h1>
      {Todos.map(todo => (
        <div key={todo.id} className="my-4 mx-6">
          <h3 className="font-semibold text-[1.1rem]">
            {todo.title}
          </h3>
          <p className="text-gray-300">
            {todo.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TodoList;