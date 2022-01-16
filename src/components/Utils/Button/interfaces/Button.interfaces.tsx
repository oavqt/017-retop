interface ButtonProps {
  attrs?: {
    type?: string;
    value?: string;
  };
  event?: {
    btnEvent?: () => void;
  };
}

interface ButtonStyledProps {
  attrs?: {
    type?: string;
    value?: string;
  };
}

export { type ButtonStyledProps };
export default ButtonProps;
