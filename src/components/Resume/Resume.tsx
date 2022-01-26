import { ChangeEvent, Component, ReactNode } from 'react';
import Form from '../Form/Form';
import stateValuesReset from './stateValues/stateValuesReset';
import ResumeStyled from './Resume.styled';
import ResumeProps, { ResumeStateProps } from './interfaces/Resume.interfaces';
import {
  FormExperienceEducationPropsObject,
  FormExperienceEducationPropsObjectArray,
  FormExperienceEducationPropsObjectGroup
} from '../Form/interfaces/Form.interfaces';
import stateValuesExample from './stateValues/stateValuesExample';
import Preview from '../Preview/Preview';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MobileExpand from '../Mobile/MobileExpand/MobileExpand';

class Resume extends Component<ResumeProps, ResumeStateProps> {
  constructor(props: ResumeProps) {
    super(props);
    this.state = {
      mobile: {
        display: {
          preview: false
        },
        width: {
          '1200px': false
        }
      },
      values: {
        education: {
          group: [
            {
              university: '',
              degree: '',
              date: '',
              description: ''
            }
          ]
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
        personal: {
          first: '',
          last: '',
          title: '',
          photo: '',
          phone: '',
          email: '',
          website: '',
          linkedin: '',
          github: '',
          about: '',
          skills: ''
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
      ...this.state,
      values: {
        ...stateValuesReset(numberOfExpGroups ?? 1, numberOfEduGroups ?? 1)
      }
    });
  };

  updateStateExample = (): void => {
    this.setState({
      ...this.state,
      values: { ...stateValuesExample() }
    });
  };

  updateValuesPersonalPhoto = (event: ChangeEvent<HTMLInputElement>): void => {
    const eventTarget = event.target as HTMLInputElement;
    const currentPhoto = this.state.values?.personal?.photo;

    URL.revokeObjectURL(currentPhoto ?? '');

    if (eventTarget.files) {
      if (eventTarget.files[0]) {
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
    }
  };

  updateMobileDisplay = (): void => {
    const displayMobile = {
      display: {
        preview: this.state.mobile?.display?.preview ? false : true
      }
    };

    const clonedMobile = { ...this.state.mobile, ...displayMobile };

    this.setState({
      ...this.state,
      mobile: { ...clonedMobile }
    });
  };

  updateMobileWindow = (event: MediaQueryList | MediaQueryListEvent): void => {
    const widthMobile = {
      width: {
        '1200px': event.matches
      }
    };
    const clonedMobile = { ...this.state.mobile, ...widthMobile };

    this.setState({
      ...this.state,
      mobile: { ...clonedMobile }
    });
  };

  componentDidMount(): void {
    const currentMediaSize = window.matchMedia('(max-width: 1200px)');

    this.updateMobileWindow(currentMediaSize);

    currentMediaSize.addEventListener('change', (event) =>
      this.updateMobileWindow(event)
    );
  }

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

    const updateMobile = {
      updateMobileDisplay: this.updateMobileDisplay
    };

    return (
      <ResumeStyled>
        <MobileExpand
          mobile={{ ...this.state.mobile }}
          fns={{ ...updateMobile }}
        />
        <Header mobile={{ ...this.state.mobile }} />
        <Form
          mobile={{ ...this.state.mobile }}
          values={{ ...this.state.values }}
          fns={{
            ...updateExpEduAddRemove,
            ...updateValuesPerExpEdu,
            ...updateState
          }}
          rtlTestID={{ ...this.props.rtlTestID }}
        />
        <Preview
          mobile={{ ...this.state.mobile }}
          values={{ ...this.state.values }}
          rtlTestID={{ ...this.props.rtlTestID }}
        />
        <Footer mobile={{ ...this.state.mobile }} />
      </ResumeStyled>
    );
  }
}

export default Resume;
