import { FormExperienceEducationPropsObjectArray } from '../../Form/interfaces/Form.interfaces';
import State from './interfaces/state.interfaces';

const stateReset = (
  numberOfExpGroups: number,
  numberOfEduGroups: number
): State => {
  const expGroups: FormExperienceEducationPropsObjectArray = [];
  const eduGroups: FormExperienceEducationPropsObjectArray = [];

  for (let i = 0; i < numberOfExpGroups; i++)
    expGroups.push({
      position: '',
      company: '',
      date: '',
      description: ''
    });

  for (let i = 0; i < numberOfEduGroups; i++)
    eduGroups.push({
      university: '',
      degree: '',
      date: '',
      description: ''
    });

  return {
    values: {
      personal: {
        first: '',
        last: '',
        title: '',
        photo: '',
        phone: '',
        email: '',
        website: '',
        github: '',
        linkedin: '',
        about: '',
        skills: ''
      },
      experience: {
        group: expGroups
      },
      education: {
        group: eduGroups
      }
    }
  };
};

export default stateReset;
