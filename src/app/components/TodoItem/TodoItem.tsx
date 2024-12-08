import React from 'react';
import { useRecoilState } from 'recoil';
import { todoState, Todo } from '@atoms/todoState';

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const [todos, setTodos] = useRecoilState(todoState);

  const toggleComplete = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
        className="w-5 mt-3.5 h-5 text-purple-500 border-gray-300 cursor-pointer rounded-full focus:ring-purple-500"
      />
      <span className={`w-full border-t border-gray-300 pt-3 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
