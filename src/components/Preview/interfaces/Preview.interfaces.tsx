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
      address?: string;
      phone?: string;
      email?: string;
      about?: string;
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
