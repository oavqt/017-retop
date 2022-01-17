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
    btnAddEvent?: () => void;
    btnRemoveEvent?: (position: number) => void;
  };
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
