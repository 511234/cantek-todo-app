import Button, {ButtonProps} from "react-bootstrap/Button";

interface IRBButton extends ButtonProps {
    icon?: React.JSX.Element
    label: string;
}

export const RBButton = ({icon, label, ...props}: IRBButton) => {
    return (
        <Button
            className="w-75 px-5 d-flex flex-row align-items-center gap-2 justify-content-center"
            variant="outline-primary"
            type="button"
            {...props}
        >
            {icon}
                {label}
        </Button>
    )
}