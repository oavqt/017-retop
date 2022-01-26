/* eslint-disable no-unused-vars */

interface ButtonProps {
  attrs?: {
    type?: string;
    value?: string;
  };
  event?: {
    btnAddEvent?: (nameOfGroup: string) => void;
    btnRemoveEvent?: (nameOfGroup: string, position: number) => void;

    updateStateResetEvent?: () => void;
    updateStateExampleEvent?: () => void;

    updateMobileDisplayEvent?: () => void;
  };
  group?: string;
  position?: number;
  rtlTestID?: {
    btn?: {
      education?: string;
      experience?: string;
      remove?: string;
    };
    mobile?: string;
    form?: string;
    preview?: string;
    section?: {
      form?: string;
    };
  };
}

interface ButtonStyledProps {
  attrs?: {
    type?: string;
    value?: string;
  };
  rtlTestID?: {
    btn?: {
      education?: string;
      experience?: string;
      remove?: string;
    };
    mobile?: string;
    form?: string;
    preview?: string;
    section?: {
      form?: string;
    };
  };
}

export { type ButtonStyledProps };
export default ButtonProps;
