type TodoItemProps = {
  id: number,
  description: string,
  isDone: boolean,
  handleDelete: (id: number) => void,
  handleDone: (id: number) => void,
}

export default function TodoItem({ id, description, isDone, handleDelete, handleDone }: TodoItemProps) {

  return (
    <div className="flex mb-4 items-center">
      <p className={`w-full text-slate-700 ${isDone && 'line-through'}`}>{description}</p>
      {isDone ? <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-slate-500 border-slate-500 hover:bg-slate-500 min-w-fit" onClick={() => handleDone(id)}>Not Done</button> : <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500  hover:bg-green-500" onClick={() => handleDone(id)}>Done</button>
      }
      <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500" onClick={() => handleDelete(id)}>Remove</button>
    </div>
  )
}
