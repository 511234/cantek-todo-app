import Modal from 'react-bootstrap/Modal';

interface IRBModalProps {
    children: React.JSX.Element;
    handleCloseModal: () => void;
    heading: string;
}

export const RBModal = ({children, handleCloseModal, heading}: IRBModalProps) => {

    return (
        <>
            <Modal show={true} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
            </Modal>
        </>
    );
}

