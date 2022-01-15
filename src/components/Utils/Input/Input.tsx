import { Component, ReactNode } from 'react';
import Label from '../Label/Label';
import InputStyled from './Input.styled';
import InputProps from './interfaces/Input.interfaces';

class Input extends Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <Label
        attrs={{ htmlFor: this.props.label?.htmlFor || this.props.attrs?.id }}
        text={this.props.label?.text}
      >
        <InputStyled attrs={{ ...this.props.attrs }} />
      </Label>
    );
  }
}

export default Input;
