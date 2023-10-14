import Button, {ButtonProps} from "react-bootstrap/Button";

interface IRBButton extends ButtonProps {
    icon?: React.JSX.Element
    label: string;
}

export const RBButton = ({icon, label, ...props}: IRBButton) => {
    return (
        <Button
            className="w-100 px-md-5 px-3 d-flex flex-row align-items-center gap-2 justify-content-center"
            variant="outline-primary"
            type="button"
            {...props}
        >
            {icon}
            {label}
        </Button>
    )
}