import { ChangeEvent, FormEvent, useState } from "react";

const ToDoInput = ({updateList}: {updateList: (arg: string) => void}) => {
  const [list, setList] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setList(value);
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateList(list);
    setList('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={list} />
      <button type="submit">enter</button>
    </form>
  )
}

export default ToDoInput;
