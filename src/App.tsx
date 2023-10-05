import {useEffect, useRef, useState} from 'react'
import './App.css'
import {TodoItem} from "./TodoItem.tsx";

function App() {

    const [editTitle, setEditTitle] = useState<string | null>(null)
    const [todoLsItems, setTodoLsItems] = useState<string[]>(JSON.parse(localStorage.getItem('cantek-todo')))
    const editRef = useRef<HTMLInputElement>()
    const titleRef = useRef<HTMLInputElement>()

    const handleCancel = () => {
        setEditTitle('')
    }

    const handleConfirm = (todoItem: string) => {
        if (!editRef.current.value) {
            return
        }

        const itemIndex = todoLsItems.indexOf(todoItem)
        const todoItems = JSON.parse(localStorage.getItem('cantek-todo')) ?? []
        todoItems[itemIndex] = editRef.current.value
        setTodoLsItems(todoItems)
        setEditTitle('')
    }

    const handleUpdatePopup = (todoItem: string) => {
        setEditTitle(todoItem)
    }

    const handleRemove = (todoItem: string) => {
        const todoItems = todoLsItems.filter((item) => item !== todoItem)
        setTodoLsItems(todoItems)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (todoLsItems.indexOf(titleRef?.current?.value) > -1) {
            return
        }

        if (!titleRef?.current?.value) {
            return
        }
        const todoItems = JSON.parse(localStorage.getItem('cantek-todo')) ?? []
        todoItems.push(titleRef.current.value)
        localStorage.setItem('cantek-todo', JSON.stringify(todoItems))
        setTodoLsItems(todoItems)
        titleRef.current.value = ''

    }

    useEffect(() => {
        localStorage.setItem('cantek-todo', JSON.stringify(todoLsItems))
    }, [todoLsItems])

    return (
        <>
            <form onSubmit={handleSubmit} className="todo-input-section">
                <label htmlFor="todo-title">Todo item title</label>
                <input type="text" name="title" id="todo-title" placeholder="Input todo..." ref={titleRef}
                />
                <button type="submit">Add</button>
            </form>

            <div className="todo-list-section">
                {todoLsItems.length === 0 || todoLsItems.length === 1 && todoLsItems[0] === null ? 'No todos found' :
                    <ul>
                        {todoLsItems.map((todoItem) => <TodoItem editRef={editRef}
                                                                 editTitle={editTitle}
                                                                 key={todoItem}
                                                                 handleCancel={handleCancel}
                                                                 handleConfirm={handleConfirm}
                                                                 handleRemove={handleRemove}
                                                                 handleUpdatePopup={handleUpdatePopup}
                                                                 todoItem={todoItem}/>)}
                    </ul>
                }
            </div>
        </>
    )
}

export default App
