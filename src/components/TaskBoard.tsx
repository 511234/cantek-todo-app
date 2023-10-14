import {ITask} from "../types";
import {Table} from "react-bootstrap";
import {TaskRow} from "./TaskRow.tsx";

interface ITaskBoardProps {
    todoLsItems: ITask[];
    handleRemove: (i) => void;
}

export const TaskBoard = ({todoLsItems, handleRemove}: ITaskBoardProps) => {
    return (<div className="d-flex flex-grow-1 col-md-8 col-12">
        {todoLsItems.length == 0 && <div>Please Create Tasks</div>}
        {todoLsItems.length > 0 &&

            <Table striped bordered hover size="lg" className="text-center mt-3 mt-md-0">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Due Date</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {todoLsItems.map((item: ITask) =>
                    <TaskRow key={item.title}
                             handleRemove={handleRemove}
                             id={item.id} todoItem={item}/>)
                }
                </tbody>
            </Table>
        }
    </div>)
}