import {useEffect, useRef, useState} from 'react'
import './App.css'
import {ITask} from "./types";
import {TaskRow} from "./components/TaskRow.tsx";
import dayjs from "dayjs";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import CATEGORIES from "./categories.ts";
import {taskSchema} from "./schema/task.ts";
import {Form, Formik} from "formik";
import {TextField} from "./ui/TextField.tsx";
import {SelectField} from "./ui/SelectField.tsx";
import Button from "react-bootstrap/Button";
import {Greetings} from "./components/Greetings.tsx";
import {Quote} from "./components/Quote.tsx";

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
            <Greetings/>
            <Quote/>
            <Formik
                initialValues={{title: "", dueDate: dayjs().format('YYYY-MM-DD'), category: CATEGORIES[0]}}
                onSubmit={handleSubmit}
                validationSchema={taskSchema}
            >
                <Form className="d-flex flex-column left">
                    <TextField label="title" name="Todo Title" ref={titleRef}/>
                    <SelectField label="Category" name="category" optionList={CATEGORIES}/>
                    <TextField label="dueDate" name="Due Date" type="date"/>
                    <Button type="submit">Add</Button>
                </Form>
            </Formik>

            {todoLsItems.length == 0 && <div>Please Create Tasks</div>}
            {todoLsItems.length > 0 &&
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
                                 i={i} todoItem={item}/>)
                    }
                    </tbody>
                </Table>
            }

        </>
    )
}

export default App
