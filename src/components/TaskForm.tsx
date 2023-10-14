import {Form, Formik} from "formik";
import * as dayjs from "dayjs";
import CATEGORIES from "../categories.ts";
import {taskSchema} from "../schema/task.ts";
import {TextField} from "../ui/TextField.tsx";
import {SelectField} from "../ui/SelectField.tsx";
import {MutableRefObject} from "react";
import Button from "react-bootstrap/Button";

interface ITaskForm {
    handleSubmit: (values, props) => void;
    titleRef: MutableRefObject<HTMLInputElement>
}

export const TaskForm = ({handleSubmit, titleRef}: ITaskForm) => {
    return (
        <Formik
            initialValues={{title: "", dueDate: dayjs().format("YYYY-MM-DD"), category: CATEGORIES[0]}}
            onSubmit={handleSubmit}
            validationSchema={taskSchema}
        >
            <Form className="d-flex flex-column left">
                <TextField label="title" name="Todo Title" ref={titleRef}/>
                <SelectField label="Category" name="category" optionList={CATEGORIES}/>
                <TextField label="dueDate" name="Due Date" type="date"/>
                <Button type="submit">Add</Button>
            </Form>
        </Formik>)
}