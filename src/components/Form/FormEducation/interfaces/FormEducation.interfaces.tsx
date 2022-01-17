/* eslint-disable no-unused-vars */

interface FormEducationProps {
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
  education?: FormEducationPropsObjectGroup;
  fns?: {
    addExperienceGroup?: () => void;
    addEducationGroup?: () => void;
    removeExperienceGroup?: (position: number) => void;
    removeEducationGroup?: (position: number) => void;
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
