import { Component, ReactNode } from 'react';
import Div from '../../Utils/Div/Div';
import H3 from '../../Utils/Headings/H3/H3';
import LI from '../../Utils/LI/LI';
import UL from '../../Utils/UL/UL';
import PreviewEducationProps from './interfaces/PreviewEducation.interfaces';
import PreviewEducationStyled from './PreviewEducation.styled';
import PreviewEducationGroup from './PreviewExperienceGroup/PreviewEducationGroup';

class PreviewEducation extends Component<PreviewEducationProps> {
  constructor(props: PreviewEducationProps) {
    super(props);
  }

  render(): ReactNode {
    const previewEduGroup = this.props.education?.group?.map(
      (object, index) => (
        <LI key={index}>
          <PreviewEducationGroup value={{ ...object }} />
        </LI>
      )
    );

    return (
      <PreviewEducationStyled>
        <Div styled={{ padding: '.5em' }}>
          <H3>education \⤥</H3>
          <UL styled={{ ['list-style']: 'none' }}>{previewEduGroup}</UL>
        </Div>
      </PreviewEducationStyled>
    );
  }
}

export default PreviewEducation;
