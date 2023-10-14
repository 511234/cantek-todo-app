import {Form, Formik} from "formik";
import {TextField} from "../ui/TextField.tsx";
import {RBButton} from "../ui/RBButton.tsx";
import {useLocalStorage} from "../hooks/useLocalStorage.tsx";

interface ISettingsProps {
    handleSubmit: (values) => void;
}

export const Settings = ({handleSubmit}: ISettingsProps) => {

    const [ls] = useLocalStorage(['nickname'])

    return (
        // TODO: add validation schema
        <div>
            <Formik
                initialValues={{nickname: ls?.nickname || ''}}
                onSubmit={handleSubmit}
            >
                <Form className="d-flex flex-column gap-3">
                    <TextField label="nickname" name="Your Nickname"/>
                    <div className="d-flex justify-content-end" id="submit-section">
                        <RBButton className="mt-1" variant="outline-success" type="submit" label="Submit"/>
                    </div>
                </Form>
            </Formik></div>
    )
}