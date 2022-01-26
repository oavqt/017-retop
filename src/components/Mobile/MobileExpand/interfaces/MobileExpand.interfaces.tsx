interface MobileExpandProps {
  mobile?: {
    display?: { preview?: boolean };
    width?: {
      '1200px'?: boolean;
    };
  };
  fns?: {
    updateMobileDisplay?: () => void;
  };
  rtlTestID?: {
    btn?: {
      education?: string;
      experience?: string;
    };
    mobile?: string;
    form?: string;
    preview?: string;
    section?: {
      form?: string;
    };
  };
}

interface MobileExpandStyledProps {
  rtlTestID?: {
    btn?: {
      education?: string;
      experience?: string;
    };
    mobile?: string;
    form?: string;
    preview?: string;
    section?: {
      form?: string;
    };
  };
}

export { type MobileExpandStyledProps };
export default MobileExpandProps;
