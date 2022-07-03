import { useEffect, useState, MouseEvent } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage";
import TodoItem from "./TodoItem";
import { toast } from 'react-toastify';

export default function Todo() {

  type todo = {
    id: number,
    description: string,
    isDone: boolean
  }

  const [todos, setTodos] = useLocalStorage<todo[]>("todo-list", []);
  const [input, setInput] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (input.trim() === '') {
      toast.error("Input cannot be empty !");
      return;
    }
    const id = Math.floor(Math.random() * 10000) + 1
    setTodos([...todos, { id, description: input, isDone: false }])
    setInput("");
  }

  const handleDelete = (id: number): void => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== id
      })
    )
  }

  const handleDone = (id: number): void => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) return { ...todo, isDone: !todo.isDone }
        return { ...todo }
      })
    )
  }

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-2xl">
        <div className="mb-4">
          <h1 className="text-slate-700 text-xl">Todo List</h1>
          <form onSubmit={handleSubmit} className="flex mt-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-slate-500-darker" placeholder="Add Todo" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="flex-no-shrink p-2 border-2 rounded text-tea-500 border-teal-500 hover:text-white hover:bg-teal-500">Add</button>
          </form>
        </div>
        <div>
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} handleDelete={handleDelete} handleDone={handleDone} />
          ))}
        </div>
      </div>
    </div>
  )
}