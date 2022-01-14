import { Component, ReactNode } from 'react';
import LabelStyled from './Label.styled';

interface label {
  attrs?: {
    htmlFor?: string;
  };
  text?: string;
}

class Label extends Component<label> {
  constructor(props: label) {
    super(props);
  }

  render(): ReactNode {
    return (
      <LabelStyled {...this.props}>
        {this.props.text}
        {this.props.children}
      </LabelStyled>
    );
  }
}

export { type label };
export default Label;
