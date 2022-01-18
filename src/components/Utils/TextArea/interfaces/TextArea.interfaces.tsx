/* eslint-disable no-unused-vars */

import { ChangeEvent } from 'react';

interface TextareaProps {
  attrs: {
    id?: string;
    name?: string;
    placeholder?: string;
    value?: string;
  };
  event?: {
    updateValuesPersonalEvent?: (
      event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => void;
    updateValuesGroupObjectEvent?: (
      event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
      nameOfGroup: string,
      position: number
    ) => void;
  };
  group?: string;
  label?: {
    htmlFor?: string;
    text?: string;
  };
  position?: number;
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
