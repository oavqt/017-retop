interface FormPersonalProps {
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
  personal?: {
    first?: string;
    last?: string;
    title?: string;
    photo?: string;
    address?: string;
    phone?: string;
    email?: string;
    description?: string;
  };
}

export default FormPersonalProps;
