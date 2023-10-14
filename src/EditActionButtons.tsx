import Button from 'react-bootstrap/Button';
import {AiFillDelete} from "react-icons/ai";

interface IEditActionButtons {
    handleRemove: (id) => void;
    id: number;
}

export const EditActionButtons = ({handleRemove, id}: IEditActionButtons) => {
    return (<>
        <Button variant="none" className="" type="button"
                onClick={() => handleRemove(id)}>
            <AiFillDelete/>
        </Button>

    </>)
}