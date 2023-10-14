import {ITask} from "../types";
import {Table} from "react-bootstrap";
import {TaskRow} from "./TaskRow.tsx";

interface ITaskBoardProps {
    todoLsItems: ITask[];
    handleRemove: (i) => void;
}

export const TaskBoard = ({todoLsItems, handleRemove}: ITaskBoardProps) => {
    return (<div className="d-flex flex-grow-1 w-75">
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
    </div>)
}