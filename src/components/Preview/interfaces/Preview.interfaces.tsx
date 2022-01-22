import { PreviewEducationPropsObjectGroup } from '../PreviewEducation/interfaces/PreviewEducation.interfaces';
import { PreviewExperiencePropsObjectGroup } from '../PreviewExperience/interfaces/PreviewExperience.interfaces';

interface PreviewProps {
  attrs?: {
    print?: boolean;
    rtlTestID?: {
      preview?: string;
    };
  };
  values?: {
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
    experience?: PreviewExperiencePropsObjectGroup;
    education?: PreviewEducationPropsObjectGroup;
  };
}

interface PreviewStyledProps {
  attrs?: {
    print?: boolean;
    rtlTestID?: {
      preview?: string;
    };
  };
}

export { type PreviewStyledProps };
export default PreviewProps;
