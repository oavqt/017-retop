/* eslint-disable no-unused-vars */

interface ButtonProps {
  attrs?: {
    rtlTestID?: {
      btn?: string;
    };
    type?: string;
    value?: string;
  };
  event?: {
    btnAddEvent?: (nameOfGroup: string) => void;
    btnRemoveEvent?: (nameOfGroup: string, position: number) => void;

    updateStateResetEvent?: () => void;
  };
  group?: string;
  position?: number;
}

interface ButtonStyledProps {
  attrs?: {
    rtlTestID: {
      btn: string;
    };
    type?: string;
    value?: string;
  };
}

export { type ButtonStyledProps };
export default ButtonProps;
