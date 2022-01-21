import { ChangeEvent, Component, ReactNode } from 'react';
import Form from '../Form/Form';
import stateReset from './state/state.reset';
import ResumeStyled from './Resume.styled';
import ResumeProps, { ResumeStateProps } from './interfaces/Resume.interfaces';
import {
  FormExperienceEducationPropsObject,
  FormExperienceEducationPropsObjectArray,
  FormExperienceEducationPropsObjectGroup
} from '../Form/interfaces/Form.interfaces';
import stateExample from './state/state.example';
import Preview from '../Preview/Preview';

class Resume extends Component<ResumeProps, ResumeStateProps> {
  constructor(props: ResumeProps) {
    super(props);
    this.state = {
      values: {
        personal: {
          first: '',
          last: '',
          title: '',
          photo: '',
          address: '',
          phone: '',
          email: '',
          about: ''
        },
        experience: {
          group: [
            {
              position: '',
              company: '',
              date: '',
              description: ''
            }
          ]
        },
        education: {
          group: [
            {
              university: '',
              degree: '',
              date: '',
              description: ''
            }
          ]
        }
      }
    };
  }

  updateValuesPersonal = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        personal: {
          ...this.state.values?.personal,
          [event.target.name]: event.target.value
        }
      }
    });
  };

  updateValuesGroupObject = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    nameOfGroup: string,
    position: number
  ): void => {
    const copyGroup = [
      ...(this.state.values?.[
        nameOfGroup as keyof FormExperienceEducationPropsObjectGroup
      ]?.group ?? [])
    ] as FormExperienceEducationPropsObjectArray;

    copyGroup[position][
      event.target.name as keyof FormExperienceEducationPropsObject
    ] = event.target.value;

    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        [nameOfGroup]: {
          group: copyGroup
        }
      }
    });
  };

  updateGroupAddObject = (nameOfGroup: string): void => {
    const addObject = {
      experience: {
        position: '',
        company: '',
        date: '',
        description: ''
      },
      education: {
        university: '',
        degree: '',
        date: '',
        description: ''
      }
    };

    const copyGroup = [
      ...(this.state.values?.[
        nameOfGroup as keyof FormExperienceEducationPropsObjectGroup
      ]?.group ?? []),
      {
        ...addObject[
          nameOfGroup as keyof FormExperienceEducationPropsObjectGroup
        ]
      }
    ] as FormExperienceEducationPropsObjectArray;

    copyGroup[0];

    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        [nameOfGroup]: {
          group: copyGroup
        }
      }
    });
  };

  updateGroupRemoveObject = (nameOfGroup: string, position: number): void => {
    const copyGroup = [
      ...(this.state.values?.[
        nameOfGroup as keyof FormExperienceEducationPropsObjectGroup
      ]?.group ?? [])
    ] as FormExperienceEducationPropsObjectArray;

    copyGroup?.splice(position, 1);

    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        [nameOfGroup]: {
          group: copyGroup
        }
      }
    });
  };

  updateStateReset = (): void => {
    const numberOfExpGroups = this.state.values?.experience?.group?.length;
    const numberOfEduGroups = this.state.values?.education?.group?.length;

    this.setState({
      ...stateReset(numberOfExpGroups ?? 1, numberOfEduGroups ?? 1)
    });
  };

  updateStateExample = (): void => {
    this.setState({ ...stateExample() });
  };

  updateValuesPersonalPhoto = (event: ChangeEvent<HTMLInputElement>): void => {
    const eventTarget = event.target as HTMLInputElement;
    const currentPhoto = this.state.values?.personal?.photo;

    URL.revokeObjectURL(currentPhoto ?? '');

    if (eventTarget.files) {
      const URLPhotoFile = URL.createObjectURL(eventTarget.files[0]);

      this.setState({
        ...this.state,
        values: {
          ...this.state.values,
          personal: {
            ...this.state.values?.personal,
            photo: URLPhotoFile
          }
        }
      });
    }
  };

  render(): ReactNode {
    const updateExpEduAddRemove = {
      updateGroupAddObject: this.updateGroupAddObject,
      updateGroupRemoveObject: this.updateGroupRemoveObject
    };

    const updateValuesPerExpEdu = {
      updateValuesPersonal: this.updateValuesPersonal,
      updateValuesPersonalPhoto: this.updateValuesPersonalPhoto,
      updateValuesGroupObject: this.updateValuesGroupObject
    };

    const updateState = {
      updateStateReset: this.updateStateReset,
      updateStateExample: this.updateStateExample
    };

    return (
      <ResumeStyled>
        <Form
          attrs={{ ...this.props.form?.attrs }}
          values={{ ...this.state.values }}
          fns={{
            ...updateExpEduAddRemove,
            ...updateValuesPerExpEdu,
            ...updateState
          }}
        />
        <Preview
          attrs={{ ...this.props.preview?.attrs }}
          values={{ ...this.state.values }}
        />
      </ResumeStyled>
    );
  }
}

export default Resume;
