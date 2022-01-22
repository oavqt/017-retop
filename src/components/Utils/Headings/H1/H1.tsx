import { Component, ReactNode } from 'react';
import HeadingsProps from '../interfaces/Headings.interfaces';
import H1Styled from './H1.styled';

class H1 extends Component<HeadingsProps> {
  render(): ReactNode {
    return (
      <H1Styled styled={{ ...this.props.styled }}>
        {this.props.children}
      </H1Styled>
    );
  }
}

export default H1;
