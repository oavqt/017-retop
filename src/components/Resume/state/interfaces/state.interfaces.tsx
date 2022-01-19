import { FormExperienceEducationPropsObjectArray } from '../../../Form/interfaces/Form.interfaces';

interface StateReset {
  values: {
    personal: {
      first: string;
      last: string;
      title: string;
      photo: string;
      address: string;
      phone: string;
      email: string;
      about: string;
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
