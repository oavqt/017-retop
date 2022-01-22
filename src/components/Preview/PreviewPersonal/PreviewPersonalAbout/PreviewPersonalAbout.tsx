import { Component, ReactNode } from 'react';
import Article from '../../../Utils/Article/Article';
import Div from '../../../Utils/Div/Div';
import H3 from '../../../Utils/Headings/H3/H3';
import Paragraph from '../../../Utils/Paragraph/Paragraph';
import PreviewPersonalAboutProps from './interfaces/PreviewPersonalAbout.interfaces';
import PreviewPersonalAboutStyled from './PreviewPersonalAbout.styled';

class PreviewPersonalAbout extends Component<PreviewPersonalAboutProps> {
  render(): ReactNode {
    return (
      <PreviewPersonalAboutStyled>
        <Article>
          <Div styled={{ padding: '.5em' }}>
            <H3>about \⤥</H3>
            <Paragraph>{this.props.personal?.about}</Paragraph>
          </Div>
          <Div styled={{ padding: '.5em' }}>
            <H3>skills \⤥</H3>
            <Paragraph>{this.props.personal?.skills}</Paragraph>
          </Div>
        </Article>
      </PreviewPersonalAboutStyled>
    );
  }
}

export default PreviewPersonalAbout;
