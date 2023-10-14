import {ITask} from "../types";
import {EditActionButtons} from "../EditActionButtons.tsx";

interface ITaskRow {
    handleRemove: (props) => void;
    i: number;
    todoItem: ITask
}

export const TaskRow = ({handleRemove, i, todoItem}: ITaskRow) => {
    return (
        <tr>
            <td className="flex-wrap">{todoItem.title}</td>
            <td>{todoItem.dueDate}</td>
            <td>{todoItem.category}</td>
            <td>
                <EditActionButtons
                    handleRemove={handleRemove} i={i}/>
            </td>
        </tr>
    )
}