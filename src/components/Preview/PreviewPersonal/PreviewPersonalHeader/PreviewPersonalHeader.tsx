import { Component, ReactNode } from 'react';
import Div from '../../../Utils/Div/Div';
import H1 from '../../../Utils/Headings/H1/H1';
import H2 from '../../../Utils/Headings/H2/H2';
import PreviewPersonalHeaderProps from './interfaces/PreviewPersonalHeader.interfaces';
import PreviewPersonalHeaderStyled from './PreviewPersonalHeader.styled';

class PreviewPersonalHeader extends Component<PreviewPersonalHeaderProps> {
  render(): ReactNode {
    return (
      <PreviewPersonalHeaderStyled>
        <Div>
          <H1>{this.props.personal?.first}</H1>
          <H2>{this.props.personal?.title}</H2>
        </Div>
      </PreviewPersonalHeaderStyled>
    );
  }
}

export default PreviewPersonalHeader;
