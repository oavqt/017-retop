import { Component, ReactNode } from 'react';
import Div from '../../Utils/Div/Div';
import H3 from '../../Utils/Headings/H3/H3';
import LI from '../../Utils/LI/LI';
import UL from '../../Utils/UL/UL';
import PreviewExperienceProps from './interfaces/PreviewExperience.interfaces';
import PreviewExperienceStyled from './PreviewExperience.styled';
import PreviewExperienceGroup from './PreviewExperienceGroup/PreviewExperienceGroup';

class PreviewExperience extends Component<PreviewExperienceProps> {
  constructor(props: PreviewExperienceProps) {
    super(props);
  }

  render(): ReactNode {
    const previewExpGroup = this.props.experience?.group?.map(
      (object, index) => (
        <LI key={index}>
          <PreviewExperienceGroup value={{ ...object }} />
        </LI>
      )
    );

    return (
      <PreviewExperienceStyled>
        <Div>
          <H3>experience</H3>
          <UL styled={{ listStyle: 'none' }}>{previewExpGroup}</UL>
        </Div>
      </PreviewExperienceStyled>
    );
  }
}

export default PreviewExperience;
