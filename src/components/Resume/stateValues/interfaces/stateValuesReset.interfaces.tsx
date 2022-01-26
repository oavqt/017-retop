import { FormExperienceEducationPropsObjectArray } from '../../../Form/interfaces/Form.interfaces';

interface StateValuesReset {
  education: {
    group: FormExperienceEducationPropsObjectArray;
  };
  experience: {
    group: FormExperienceEducationPropsObjectArray;
  };
  personal: {
    first: string;
    last: string;
    title: string;
    photo: string;
    phone: string;
    email: string;
    website: string;
    github: string;
    linkedin: string;
    about: string;
    skills: string;
  };
}

export default StateValuesReset;
