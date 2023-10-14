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
    const editRef = useRef<HTMLInputElement>()
    const titleRef = useRef<HTMLInputElement>()

    const handleCancel = () => {
    }

    const handleConfirm = (todoItem: string) => {
        if (!editRef.current.value) {
            return
        }
        console.log('todoItem', todoItem)

    }


    const handleRemove = (i: number) => {
        console.log('handleRemove')
        console.log('i', i)
        const todoItems = todoLsItems.filter((item, index) => i !== index)
        console.log('todoItems', todoItems)
        setTodoLsItems(todoItems)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleSubmit = (values, {resetForm}) => {

        const todoItems = JSON.parse(localStorage.getItem('cantek-todo')) ?? []
        values.dueDate = dayjs(values.dueDate).format("YYYY-MM-DD")

        console.log('values', values)
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

            <TaskForm handleSubmit={handleSubmit} titleRef={titleRef}/>

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
                        <TaskRow key={item.title} handleCancel={handleCancel} handleConfirm={handleConfirm}
                                 handleRemove={handleRemove}
                                 i={i} todoItem={item}/>)}
                    </tbody>
                </Table>
            }

        </>
    )
}

export default App
