import React from 'react';
import { IApp} from "./types";
import { TodoList } from "./TodoList";

const App: React.FC<IApp> = ({todos}) => {
  return (
      <div>
        <TodoList todos={todos}/>
        <ExpensiveTree />
      </div>
  );
};

function ExpensiveTree() {
  let now = performance.now();

  while (performance.now() - now < 1000) {
    // Artificial delay -- do nothing for 1000ms
  }

  return null;
}

export default App;
