/* eslint-disable no-unused-vars */

interface FormExperienceProps {
  experience?: FormExperiencePropsObjectGroup;
  fns?: {
    addExperienceGroup?: () => void;
    addEducationGroup?: () => void;
    removeExperienceGroup?: (position: number) => void;
    removeEducationGroup?: (position: number) => void;
  };
}

interface FormExperiencePropsObject {
  position?: string;
  company?: string;
  date?: string;
  description?: string;
}

interface FormExperiencePropsObjectGroup {
  group?: Array<FormExperiencePropsObject>;
}

export { type FormExperiencePropsObject, type FormExperiencePropsObjectGroup };
export default FormExperienceProps;
