interface FormEducationProps {
  education?: FormEducationPropsObjectGroup;
  fns?: {
    addExperienceGroup?: () => void;
    addEducationGroup?: () => void;
  };
}

interface FormEducationPropsObject {
  degree?: string;
  university?: string;
  date?: string;
  description?: string;
}

interface FormEducationPropsObjectGroup {
  group?: Array<FormEducationPropsObject>;
}

export { type FormEducationPropsObject, type FormEducationPropsObjectGroup };
export default FormEducationProps;
