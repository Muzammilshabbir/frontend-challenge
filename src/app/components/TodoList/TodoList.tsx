/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from '@atoms/todoState';
import TodoItem from '@components/TodoItem/TodoItem';
import { nanoid } from 'nanoid';
import Input from "@components/Input/Input";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: nanoid(), text: newTodo.trim(), completed: false },
      ]);
      setNewTodo('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="space-y-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <form className="flex items-center space-x-2 mt-4" onSubmit={addTodo}>
        <button
          type='submit'
          className="text-purple-500 bg-gray-100 rounded-full hover:bg-purple-100"
        >
          ➕
        </button>
        <div className="border-b w-full pt-2 pb-2 border-t flex items-center border-gray-300">
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Memorize the dictionary"
            className='w-full'
          />
          <button
            type='submit'
            className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-700 whitespace-nowrap"
          >
            Add Item
          </button>

        </div>
      </form>
    </div>
  );
};

export default TodoList;
