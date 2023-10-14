import {useEffect, useRef, useState} from 'react'
import './App.css'
import {ITask} from "./types";
import {TaskRow} from "./components/TaskRow.tsx";
import * as dayjs from "dayjs";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TaskForm} from "./components/TaskForm.tsx";

function App() {

    const [todoLsItems, setTodoLsItems] = useState<ITask[]>(JSON.parse(localStorage.getItem('cantek-todo')) ?? [])
    const titleRef = useRef<HTMLInputElement>()

    const handleRemove = (i: number) => {
        const todoItems = todoLsItems.filter((item, index) => i !== index)
        setTodoLsItems(todoItems)
    }

    const handleSubmit = (values, {resetForm}) => {

        const todoItems = JSON.parse(localStorage.getItem('cantek-todo')) ?? []
        values.dueDate = dayjs(values.dueDate).format("YYYY-MM-DD")

        todoItems.push(values)
        localStorage.setItem('cantek-todo', JSON.stringify(todoItems))
        setTodoLsItems(todoItems)
        resetForm()
        titleRef?.current?.focus()
    }

    useEffect(() => {
        localStorage.setItem('cantek-todo', JSON.stringify(todoLsItems))
    }, [todoLsItems])

    return (
        <>
            <TaskForm handleSubmit={handleSubmit}/>

            {todoLsItems.length == 0 ? <div>Please Create Tasks</div> :
                <Table striped bordered hover size="lg" className="text-center">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Due Date</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todoLsItems.map((item, i) =>
                        <TaskRow key={item.title}
                                 handleRemove={handleRemove}
                                 i={i} todoItem={item}/>)}
                    </tbody>
                </Table>
            }

        </>
    )
}

export default App
