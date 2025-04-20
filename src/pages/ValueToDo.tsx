import { useState } from "react";
import ToDoInput from "./Todo";

const ValueToDo = () => {
    const [list, setList] = useState<string[]>([]);

    const updateList = (str: string) => {
        setList([...list, str]);
    }

    const handleRemove = (idEl: number) => {
        setList(() => {
            return list.filter((_el, id) => idEl !== id)
        })
    }


    return (
      <div>
        <ToDoInput updateList={updateList} />
        <ul>
            {list.map((el, id) => <li key={id} onClick={() => handleRemove(id)}>{el}</li>)}
        </ul>
      </div>
    )
}

export default ValueToDo;
