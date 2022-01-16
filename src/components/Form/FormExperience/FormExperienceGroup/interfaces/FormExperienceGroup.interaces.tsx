/* eslint-disable no-unused-vars */

interface FormExperienceGroupProps {
  fns?: {
    addExperienceGroup?: () => void;
    addEducationGroup?: () => void;
    removeExperienceGroup?: (position: number) => void;
    removeEducationGroup?: (position: number) => void;
  };
  position?: number;
  value?: {
    position?: string;
    company?: string;
    date?: string;
    description?: string;
  };
}

export default FormExperienceGroupProps;
