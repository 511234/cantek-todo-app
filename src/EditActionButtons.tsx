export const EditActionButtons = ({handleCancel, handleConfirm, todoItem}) => {
    return (<>
        <button type="button" onClick={() => handleConfirm(todoItem)}>Confirm</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
    </>)
}