import { Component, ReactNode } from 'react';
import LabelStyled, { LabelFileStyled } from './Label.styled';

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

class LabelFile extends Label {
  render(): ReactNode {
    return (
      <LabelFileStyled {...this.props}>
        {this.props.text}
        {this.props.children}
      </LabelFileStyled>
    );
  }
}

export { LabelFile, type label };
export default Label;
