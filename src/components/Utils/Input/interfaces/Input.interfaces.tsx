/* eslint-disable no-unused-vars */

import { ChangeEvent } from 'react';

interface InputProps {
  attrs?: {
    id?: string;
    name?: string;
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
  event?: {
    inptUpdateValueEvent?: (event: ChangeEvent<HTMLInputElement>) => void;
  };
}

interface InputStyledProps {
  attrs?: {
    id?: string;
    name?: string;
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
