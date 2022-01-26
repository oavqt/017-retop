import { Component, ReactNode } from 'react';
import PreviewEducationGroupStyled from './PreviewEducationGroup.styled';
import PreviewEducationGroupProps from './interfaces/PreviewEducationGroup.interfaces';
import H5 from '../../../Utils/Headings/H5/H5';
import H4 from '../../../Utils/Headings/H4/H4';
import Paragraph from '../../../Utils/Paragraph/Paragraph';
import Div from '../../../Utils/Div/Div';

class PreviewEducationGroup extends Component<PreviewEducationGroupProps> {
  constructor(props: PreviewEducationGroupProps) {
    super(props);
  }
  render(): ReactNode {
    return (
      <PreviewEducationGroupStyled>
        <Div styled={{ display: 'flex', gap: '1em' }}>
          <Div>
            <Paragraph>{this.props.value?.date}</Paragraph>
          </Div>
          <Div>
            <H4>{this.props.value?.university}</H4>
            <H5>{this.props.value?.degree}</H5>
            <Paragraph>{this.props.value?.description}</Paragraph>
          </Div>
        </Div>
      </PreviewEducationGroupStyled>
    );
  }
}

export default PreviewEducationGroup;
