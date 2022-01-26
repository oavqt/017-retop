import { PreviewEducationPropsObjectGroup } from '../PreviewEducation/interfaces/PreviewEducation.interfaces';
import { PreviewExperiencePropsObjectGroup } from '../PreviewExperience/interfaces/PreviewExperience.interfaces';

interface PreviewProps {
  mobile?: {
    display?: { preview?: boolean };
    width?: {
      '1200px'?: boolean;
    };
  };
  values?: {
    education?: PreviewEducationPropsObjectGroup;
    experience?: PreviewExperiencePropsObjectGroup;
    personal?: {
      first?: string;
      last?: string;
      title?: string;
      photo?: string;
      phone?: string;
      email?: string;
      website?: string;
      github?: string;
      linkedin?: string;
      about?: string;
      skills?: string;
    };
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

interface PreviewStyledProps {
  mobile?: {
    display?: { preview?: boolean };
    width?: {
      '1200px'?: boolean;
    };
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

export { type PreviewStyledProps };
export default PreviewProps;
