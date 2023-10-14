import Button from 'react-bootstrap/Button';
import {AiFillDelete} from "react-icons/ai";

interface IEditActionButtons {
    handleRemove: (i) => void;
    i: number;
}

export const EditActionButtons = ({handleRemove, i}: IEditActionButtons) => {
    return (<>
        <Button variant="none" className="" type="button"
                onClick={() => handleRemove(i)}>
            <AiFillDelete/>
        </Button>

    </>)
}