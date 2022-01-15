interface InputProps {
  attrs?: {
    id?: string;
    placeholder?: string;
    type?: string;
    value?: string;
  };
  styled?: {
    color?: string;
  };
  label?: {
    htmlFor?: string;
    text?: string;
  };
}

interface InputStyledProps {
  attrs?: {
    id?: string;
    placeholder?: string;
    type?: string;
    value?: string;
  };
  styled?: {
    color?: string;
  };
}

export { type InputStyledProps };
export default InputProps;
