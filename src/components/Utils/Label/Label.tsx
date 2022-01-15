import { Component, ReactNode } from 'react';
import LabelStyled from './Label.styled';
import LabelProps from './interfaces/Label.interfaces';

class Label extends Component<LabelProps> {
  constructor(props: LabelProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <LabelStyled attrs={{ ...this.props.attrs }}>
        {this.props.text}
        {this.props.children}
      </LabelStyled>
    );
  }
}

export default Label;
