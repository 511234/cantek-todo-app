import REMOVE_ICON from './imgs/remove.png'
import Button from 'react-bootstrap/Button';
import {ITask} from "./types";

interface IEditActionButtons {
    handleCancel: () => void;
    handleConfirm: (todoItem) => void;
    handleRemove: (i) => void;
    i: number;
    todoItem: ITask;
}

export const EditActionButtons = ({handleCancel, handleConfirm, handleRemove, i, todoItem}: IEditActionButtons) => {
    return (<>
        <Button className="d-none" type="button" onClick={() => handleConfirm(todoItem)}>Confirm</Button>
        <Button className="d-none" type="button" onClick={handleCancel}>Cancel</Button>
        <Button size="sm" variant="light" className="" type="button" onClick={() => handleRemove(i)}>
            <img className="w-25" src={REMOVE_ICON}/>
        </Button>

    </>)
}