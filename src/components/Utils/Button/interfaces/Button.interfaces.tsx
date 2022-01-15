interface ButtonProps {
  attrs?: {
    type?: string;
    value?: string;
  };
  events?: {
    addExperienceGroup?: () => void;
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
