import { FormExperienceEducationPropsObjectArray } from '../../Form/interfaces/Form.interfaces';
import State from './interfaces/stateValuesReset.interfaces';

const stateValuesReset = (
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
    education: {
      group: eduGroups
    },
    experience: {
      group: expGroups
    },
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
    }
  };
};

export default stateValuesReset;
