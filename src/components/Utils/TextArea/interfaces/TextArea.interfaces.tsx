/* eslint-disable no-unused-vars */

import { ChangeEvent } from 'react';

interface TextareaProps {
  attrs: {
    id?: string;
    name?: string;
    placeholder?: string;
    value?: string;
  };
  label?: {
    htmlFor?: string;
    text?: string;
  };
  event?: {
    textUpdateValueEvent?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  };
}

interface TextareaStyledProps {
  attrs: {
    id?: string;
    name?: string;
    placeholder?: string;
    value?: string;
  };
}

export { type TextareaStyledProps };
export default TextareaProps;
