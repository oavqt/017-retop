/* eslint-disable no-unused-vars */

import { ChangeEvent } from 'react';

interface InputProps {
  attrs?: {
    accept?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    type?: string;
    value?: string;
  };
  event?: {
    updateValuesPersonalEvent?: (
      event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => void;
    updateValuesPersonalPhotoEvent?: (
      event: ChangeEvent<HTMLInputElement>
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
  styled?: {
    color?: string;
  };
}

interface InputStyledProps {
  attrs?: {
    accept?: string;
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
