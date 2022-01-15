interface TextareaProps {
  attrs: {
    id?: string;
    placeholder?: string;
    value?: string;
  };
  label?: {
    htmlFor?: string;
    text?: string;
  };
}

interface TextareaStyledProps {
  attrs: {
    id?: string;
    placeholder?: string;
    value?: string;
  };
}

export { type TextareaStyledProps };
export default TextareaProps;
