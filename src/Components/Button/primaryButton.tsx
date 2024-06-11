import { Button, ButtonProps } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./buttonStyle.css";

type PrimaryButtonType = {
  label: any;
  type?: string;
  className?: string;
  isDisabled?: boolean;
  style?: object;
} & ButtonProps;

const PrimaryButton = (
  { label, onClick, type = "button", isDisabled, style }: PrimaryButtonType,
  props: ButtonProps
) => {
  return (
    <>
      <Button
        style={style}
        disabled={isDisabled}
        onClick={onClick}
        className="primaryBtn"
        type={type}
        {...props}
      >
        <div>
          <div>{label}</div>
          <ChevronRightIcon />
        </div>
      </Button>
    </>
  );
};

export default PrimaryButton;
