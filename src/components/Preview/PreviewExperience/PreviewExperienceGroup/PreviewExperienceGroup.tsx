import { Component, ReactNode } from 'react';
import PreviewExperienceGroupStyled from './PreviewExperienceGroup.styled';
import PreviewExperienceGroupProps from './interfaces/PreviewExperienceGroup.interfaces';
import H5 from '../../../Utils/Headings/H5/H5';
import H4 from '../../../Utils/Headings/H4/H4';
import Paragraph from '../../../Utils/Paragraph/Paragraph';
import Div from '../../../Utils/Div/Div';

class PreviewExperienceGroup extends Component<PreviewExperienceGroupProps> {
  constructor(props: PreviewExperienceGroupProps) {
    super(props);
  }
  render(): ReactNode {
    return (
      <PreviewExperienceGroupStyled>
        <Div styled={{ display: 'flex' }}>
          <Div>
            <Paragraph>{this.props.value?.date}</Paragraph>
          </Div>
          <Div>
            <H4>{this.props.value?.position}</H4>
            <H5>{this.props.value?.company}</H5>
            <Paragraph>{this.props.value?.description}</Paragraph>
          </Div>
        </Div>
      </PreviewExperienceGroupStyled>
    );
  }
}

export default PreviewExperienceGroup;
