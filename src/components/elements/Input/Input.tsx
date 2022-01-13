import { Component, ReactNode } from 'react';
import Label, { LabelFile } from '../Label/Label';
import InputStyled, { InputFileStyled } from './Input.styled';

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

class InputFile extends Input {
  render(): ReactNode {
    return (
      <LabelFile
        attrs={{ htmlFor: this.props.label?.htmlFor || this.props.attrs?.id }}
        text={this.props.label?.text}
      >
        <InputFileStyled {...this.props} />
      </LabelFile>
    );
  }
}

export { InputFile, type input };
export default Input;
