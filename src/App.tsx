import {useEffect, useRef, useState} from 'react'
import './App.css'
import {ITask} from "./types";
import dayjs from "dayjs";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Greetings} from "./components/Greetings.tsx";
import {Quote} from "./components/Quote.tsx";
import {TaskBoard} from "./components/TaskBoard.tsx";
import {ActionButtons} from "./components/ActionButtons.tsx";
import {TaskForm} from "./components/TaskForm.tsx";
import {RBModal} from "./ui/RBModal.tsx";
import {Settings} from "./components/Settings.tsx";
import {useLocalStorage} from "./hooks/useLocalStorage.tsx";

function App() {

    const [shouldShowModal, setShouldShowModal] = useState(false)
    const [shouldShowSetting, setShouldShowSetting] = useState(false)
    const [todoLsItems, setTodoLsItems] = useState<ITask[]>(JSON.parse(localStorage.getItem('cantek-todo')) ?? [])
    const titleRef = useRef<HTMLInputElement>()
    const [ls, setLs] = useLocalStorage(['nickname', 'closeOnAddNew'])

    const handleCloseModal = () => {
        setShouldShowModal(false)
    }

    const handleCloseSetting = () => {
        setShouldShowSetting(false)
    }

    const handleRemove = (id: number) => {
        const todoItems = todoLsItems.filter((item) => id !== item.id)
        setTodoLsItems(todoItems)
    }

    const handleSubmit = (values, {resetForm}) => {
        const todoItems = JSON.parse(localStorage.getItem('cantek-todo')) ?? []
        values.dueDate = dayjs(values.dueDate).format("YYYY-MM-DD")
        values.id = todoItems.length + 1
        todoItems.push(values)
        localStorage.setItem('cantek-todo', JSON.stringify(todoItems))
        setTodoLsItems(todoItems)
        resetForm()
        titleRef?.current?.focus()
        if (ls.closeOnAddNew) {
            handleCloseModal()
        }
    }

    const handleSubmitSetting = (values) => {
        setLs(values)
        handleCloseSetting()
    }

    useEffect(() => {
        localStorage.setItem('cantek-todo', JSON.stringify(todoLsItems))
    }, [todoLsItems])

    return (
        <>
            <Greetings/>
            <Quote/>

            {shouldShowModal &&
                <RBModal handleCloseModal={handleCloseModal} heading="Add Todo">
                    <TaskForm handleSubmit={handleSubmit} titleRef={titleRef}/>
                </RBModal>
            }

            {shouldShowSetting &&
                <RBModal handleCloseModal={handleCloseSetting} heading="Setting Preferences">
                    <Settings handleSubmit={handleSubmitSetting}/>
                </RBModal>
            }


            <div id="main-content-wrapper" className="row">
                <ActionButtons
                    shouldShowModal={shouldShowModal}
                    shouldShowSetting={shouldShowSetting}
                    setShouldShowModal={setShouldShowModal}
                    setShouldShowSetting={setShouldShowSetting}
                />
                <TaskBoard handleRemove={handleRemove} todoLsItems={todoLsItems}/>
            </div>
        </>
    )
}

export default App
