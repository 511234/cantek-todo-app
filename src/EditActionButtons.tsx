import REMOVE_ICON from './imgs/remove.png'
import Button from 'react-bootstrap/Button';

interface IEditActionButtons {
    handleRemove: (i) => void;
    i: number;
}

export const EditActionButtons = ({handleRemove, i}: IEditActionButtons) => {
    return (<>
        <Button size="sm" variant="light" className="" type="button" onClick={() => handleRemove(i)}>
            <img alt="remove" className="w-25" src={REMOVE_ICON}/>
        </Button>

    </>)
}