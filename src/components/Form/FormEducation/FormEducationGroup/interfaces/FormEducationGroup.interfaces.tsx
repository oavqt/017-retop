/* eslint-disable no-unused-vars */

interface FormEducationGroupProps {
  attrs?: {
    print?: boolean;
    rtlTestID?: {
      btn?: {
        experience?: string;
        education?: string;
      };
      form?: string;
    };
  };
  fns?: {
    removeEducationGroup?: (position: number) => void;
  };
  position?: number;
  value?: {
    university?: string;
    degree?: string;
    date?: string;
    description?: string;
  };
}

export default FormEducationGroupProps;
