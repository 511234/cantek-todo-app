import {BiSolidMessageSquareAdd} from "react-icons/bi";
import {RBButton} from "../ui/RBButton.tsx";
import {SetStateAction} from "react";
import {MdTipsAndUpdates} from "react-icons/md";
import {AiFillSetting} from "react-icons/ai";

interface IActionButtonsProps {
    shouldShowModal: boolean;
    setShouldShowModal: React.Dispatch<SetStateAction<boolean>>
}

export const ActionButtons = ({shouldShowModal, setShouldShowModal}: IActionButtonsProps) => {

    const handleClickAddTask = () => {
        setShouldShowModal(true)
    }

    return (
        <>
            <div className="w-50">
                <div className="d-flex flex-column align-items-center gap-4">
                    <RBButton
                        disabled={shouldShowModal}
                        label="Add New Task"
                        icon={<BiSolidMessageSquareAdd/>}
                        onClick={handleClickAddTask}/>
                    <RBButton
                        label="Set preferences (WIP)"
                        icon={<AiFillSetting/>}
                        onClick={() => {
                        }}
                        variant="outline-secondary"
                    />
                    <RBButton
                        href="https://www.becomingminimalist.com/most-popular-posts/"
                        label="Get Tips on Being Productive"
                        icon={<MdTipsAndUpdates/>}
                        variant="outline-success"
                    />

                </div>
            </div>
        </>
    )
}