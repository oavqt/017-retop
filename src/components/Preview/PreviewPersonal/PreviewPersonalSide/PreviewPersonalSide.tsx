import { Component, ReactNode } from 'react';
import Article from '../../../Utils/Article/Article';
import Div from '../../../Utils/Div/Div';
import H3 from '../../../Utils/Headings/H3/H3';
import H4 from '../../../Utils/Headings/H4/H4';
import Img from '../../../Utils/Img/Img';
import Paragraph from '../../../Utils/Paragraph/Paragraph';
import PreviewPersonalSideProps from './interfaces/PreviewPersonalSide.interfaces';
import PreviewPersonalSideStyled from './PreviewPersonalSide.styled';

class PreviewPersonalSide extends Component<PreviewPersonalSideProps> {
  render(): ReactNode {
    return (
      <PreviewPersonalSideStyled>
        <Article>
          <Div>
            <Img />
            <Div>
              <H3>contact</H3>
              <Div>
                <H4>address</H4>
                <Paragraph>{this.props.personal?.address}</Paragraph>
              </Div>
              <Div>
                <H4>email</H4>
                <Paragraph>{this.props.personal?.email}</Paragraph>
              </Div>
              <Div>
                <H4>phone</H4>
                <Paragraph>{this.props.personal?.phone}</Paragraph>
              </Div>
            </Div>
          </Div>
        </Article>
      </PreviewPersonalSideStyled>
    );
  }
}

export default PreviewPersonalSide;
