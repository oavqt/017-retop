interface FormExperienceProps {
  experience?: FormExperiencePropsObjectGroup;
  fns?: {
    addExperienceGroup?: () => void;
    addEducationGroup?: () => void;
  };
}

interface FormExperiencePropsObject {
  title?: string;
  company?: string;
  date?: string;
  description?: string;
}

interface FormExperiencePropsObjectGroup {
  group?: Array<FormExperiencePropsObject>;
}

export { type FormExperiencePropsObject, type FormExperiencePropsObjectGroup };
export default FormExperienceProps;
