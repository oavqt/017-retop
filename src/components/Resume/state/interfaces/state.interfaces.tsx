import { FormExperienceEducationPropsObjectArray } from '../../../Form/interfaces/Form.interfaces';

interface StateReset {
  values: {
    personal: {
      first: string;
      last: string;
      title: string;
      photo: string;
      phone: string;
      email: string;
      website?: string;
      github?: string;
      linkedin?: string;
      about: string;
      skills?: string;
    };
    experience: {
      group: FormExperienceEducationPropsObjectArray;
    };
    education: {
      group: FormExperienceEducationPropsObjectArray;
    };
  };
}

export default StateReset;
