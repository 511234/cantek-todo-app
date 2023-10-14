import {EditActionButtons} from "./EditActionButtons.tsx";

export const TodoItem = ({
                             editRef,
                             editTitle,
                             handleCancel,
                             handleConfirm,
                             handleRemove,
                             handleUpdatePopup,
                             i,
                             todoItem
                         }) => {
    return (<div>
        {editTitle === todoItem ? <input defaultValue={todoItem} ref={editRef}/> :
            <span>{todoItem}</span>}
        <button type="button" onClick={() => handleRemove(todoItem)}>Remove</button>
        {editTitle === todoItem ?
            <EditActionButtons handleCancel={handleCancel}
                               handleConfirm={handleConfirm} handleRemove={handleRemove} i={i} todoItem={todoItem}/> :
            <button type="button" onClick={() => handleUpdatePopup(todoItem)}>Update</button>}

    </div>)
}