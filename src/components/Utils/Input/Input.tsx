import { Component, ReactNode } from 'react';
import Label from '../Label/Label';
import InputStyled from './Input.styled';

interface input {
  attrs?: {
    id?: string;
    placeholder?: string;
    type?: string;
    value?: string;
  };
  label?: {
    htmlFor?: string;
    text?: string;
  };
}

class Input extends Component<input> {
  constructor(props: input) {
    super(props);
  }

  render(): ReactNode {
    return (
      <Label
        attrs={{ htmlFor: this.props.label?.htmlFor || this.props.attrs?.id }}
        text={this.props.label?.text}
      >
        <InputStyled {...this.props} />
      </Label>
    );
  }
}

export { type input };
export default Input;
