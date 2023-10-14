import {ITask} from "../types";
import {EditActionButtons} from "../EditActionButtons.tsx";
import dayjs from "dayjs";

interface ITaskRow {
    handleRemove: (props) => void;
    i: number;
    todoItem: ITask
}

export const TaskRow = ({handleRemove, i, todoItem}: ITaskRow) => {
    return (
        <tr>
            <td className="flex-wrap">{todoItem.title}</td>
            <td>{dayjs(todoItem.dueDate).format('YYYY-MM-DD')}</td>
            <td>{todoItem.category}</td>
            <td>
                <EditActionButtons
                    handleRemove={handleRemove} i={i}/>
            </td>
        </tr>
    )
}