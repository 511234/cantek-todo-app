import {BiSolidMessageSquareAdd} from "react-icons/bi";
import {RBButton} from "../ui/RBButton.tsx";
import {SetStateAction} from "react";
import {MdTipsAndUpdates} from "react-icons/md";
import {AiFillSetting} from "react-icons/ai";

interface IActionButtonsProps {
    shouldShowModal: boolean;
    shouldShowSetting: boolean;
    setShouldShowModal: React.Dispatch<SetStateAction<boolean>>
    setShouldShowSetting: React.Dispatch<SetStateAction<boolean>>
}

export const ActionButtons = ({
                                  shouldShowModal,
                                  shouldShowSetting,
                                  setShouldShowModal,
                                  setShouldShowSetting
                              }: IActionButtonsProps) => {

    const handleClickAddTask = () => {
        setShouldShowModal(true)
    }

    const handleClickSetting = () => {
        setShouldShowSetting(true)
    }

    return (
        <>
            <div className="col-md-4 col-12">
                <div className="d-flex flex-column align-items-center gap-4">
                    <RBButton
                        disabled={shouldShowModal}
                        label="Add New Task"
                        icon={<BiSolidMessageSquareAdd/>}
                        onClick={handleClickAddTask}/>
                    <RBButton
                        disabled={shouldShowSetting}
                        label="Set preferences"
                        icon={<AiFillSetting/>}
                        onClick={handleClickSetting}
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