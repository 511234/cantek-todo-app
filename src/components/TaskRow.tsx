import {ITask} from "../types";
import {EditActionButtons} from "../EditActionButtons.tsx";
import * as dayjs from "dayjs";

interface ITaskRow {
    handleCancel: () => void;
    handleConfirm: (props) => void;
    handleRemove: (props) => void;
    i: number;
    todoItem: ITask
}

export const TaskRow = ({handleCancel, handleConfirm, handleRemove, i, todoItem}: ITaskRow) => {
    return (
        <tr>
            <td className="flex-wrap">{todoItem.title}</td>
            <td>{dayjs(todoItem.dueDate).format('YYYY-MM-DD')}</td>
            <td>{todoItem.category}</td>
            <td>
                <div>
                    <EditActionButtons handleCancel={handleCancel} handleConfirm={handleConfirm}
                                       handleRemove={handleRemove} i={i} todoItem={todoItem}/>
                </div>
            </td>
        </tr>
    )
}