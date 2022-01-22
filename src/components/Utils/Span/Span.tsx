import { Component, ReactNode } from 'react';
import SpanStyled from './Span.styled';

class Span extends Component {
  render(): ReactNode {
    return <SpanStyled>{this.props.children}</SpanStyled>;
  }
}

export default Span;
