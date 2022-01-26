interface SectionProps {
  mobile?: {
    display?: { preview?: boolean };
    width?: {
      '1200px'?: boolean;
    };
  };
  styled?: {
    ['align-items']?: string;
    display?: string;
    height?: string;
    ['justify-content']?: string;
    ['overflow-y']?: string;
    width?: string;
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

interface SectionStyledProps {
  mobile?: {
    display?: { preview?: boolean };
    width?: {
      '1200px'?: boolean;
    };
  };
  styled?: {
    ['align-items']?: string;
    display?: string;
    height?: string;
    ['justify-content']?: string;
    ['overflow-y']?: string;
    width?: string;
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

export { type SectionStyledProps };
export default SectionProps;
