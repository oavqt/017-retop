interface FormExperienceProps {
  experience?: FormExperiencePropsObjectGroup;
  events?: {
    addExperienceGroup?: () => void;
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
